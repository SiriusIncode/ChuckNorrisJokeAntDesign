import React, { useState } from "react";
import "./styles.css";
import { Comment, Pagination } from "antd";
import { dateToString } from "./helpers";

const Comments = ({ commentsList }) => {
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(10);

  return (
    <div className="commentWrapper">
      <div className="comments">
        {commentsList
          .slice((page - 1) * range, page * range)
          .map((comment, index) => (
            <Comment
              key={comment.time ? comment.time : comment.id}
              author={<p>{comment.name}</p>}
              avatar={
                <div
                  className="useIco"
                  style={{ backgroundColor: comment.icoColor }}
                ></div>
              }
              content={<p>{comment.body}</p>}
              datetime={
                comment.time ? (
                  <p className="date">{dateToString(comment.time)}</p>
                ) : null
              }
            />
          ))}
      </div>
      <Pagination
        current={page}
        total={commentsList.length}
        onChange={(page, range) => {
          setPage(page);
          setRange(range);
        }}
      />
    </div>
  );
};

export default Comments;
