import generateRandomColor from "./helpers";

const loadComments = (done) => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((res) => {
      done(
        res.map((comment) => ({
          ...comment,
          icoColor: generateRandomColor()
        }))
      );
    });
};

export default loadComments;
