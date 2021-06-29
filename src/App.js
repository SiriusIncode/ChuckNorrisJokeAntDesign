import "./styles.css";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import "antd/dist/antd.css";
import { Button, Input } from "antd";
import loadJoke from "./jokeService";
import loadComments from "./commentsService";
import generateRandomColor from "./helpers";

export default function App() {
  const [joke, setJoke] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const { TextArea } = Input;

  useEffect(() => {
    loadJoke(setJoke);
    loadComments(setComments);
  }, []);

  const sendComment = () => {
    const copyComments = comments;
    copyComments.unshift({
      time: new Date(),
      body: comment,
      icoColor: generateRandomColor(),
      name
    });
    setComments(copyComments);
    setName("");
    setComment("");
  };

  const resetInputs = () => {
    setName("");
    setComment("");
  };

  return (
    <div className="App">
      <h1>Chuck Norris Joke</h1>

      <div className="wrapper">
        <div className="jokeWrapper">
          <img src={joke.icon_url} alt="Chuck Norris" />
          <p className="jokeContent">{joke.value}</p>
        </div>
        <div className="inputs">
          <Input
            placeholder="User name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="inputs">
          <TextArea
            rows={4}
            placeholder="Comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
        </div>
        <div className="buttonsWrapper">
          <Button
            type="primary"
            style={{ marginLeft: 8 }}
            onClick={sendComment}
          >
            send comment
          </Button>
          <Button
            type="secondary"
            style={{ marginLeft: 8 }}
            onClick={resetInputs}
          >
            reset inputs
          </Button>
          <Button
            type="secondary"
            style={{ marginLeft: 8 }}
            onClick={() => loadJoke(setJoke)}
          >
            reset joke
          </Button>
        </div>
      </div>

      <Comments commentsList={comments} />
    </div>
  );
}
