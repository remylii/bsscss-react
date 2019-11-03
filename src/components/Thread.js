import React from "react";
import { connect } from "react-redux";
import { getComments } from "../redux/selectors";

const Thread = ({ comments }) => (
  <section>
    <h2 className="section-title section-title-light">投稿一覧</h2>
    <section className="thread">
      {comments
        ? comments.map(comment => {
            return (
              <section
                key={`thread-comment-${comment.id}`}
                className="thread-panel"
              >
                <div className="thread-caption">
                  <span className="thread-author">{comment.author}</span>
                  <span className="thread-datetime">{comment.datetime}</span>
                </div>
                <div className="thread-body">{comment.message}</div>
              </section>
            );
          })
        : ""}
    </section>
  </section>
);

const mapStateToProps = state => {
  const comments = getComments(state);
  return { comments };
};

export default connect(mapStateToProps)(Thread);
