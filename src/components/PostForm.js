import React from "react";
import { connect } from "react-redux";
import { postComment } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      password: "",
      message: ""
    };
  }

  updateAuthor(value) {
    this.setState({
      author: value
    });
  }

  updatePassword(value) {
    this.setState({
      password: value
    });
  }

  updateMessage(value) {
    this.setState({
      message: value
    });
  }

  handlePostComment = () => {
    const d = new Date();
    this.props.postComment({
      ...this.state,
      datetime:
        d.getFullYear() +
        "/" +
        (d.getMonth() + 1) +
        "/" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds()
    });

    this.setState({
      author: "",
      password: "",
      message: ""
    });
  };

  render() {
    return (
      <article className="post">
        <h2 className="section-title section-title-light">投稿する</h2>
        <div className="section-description">
          パスワードは編集時に必要になります
        </div>
        <div className="post-panel">
          <div className="post-field">
            <p className="post-field-label">名前*</p>
            <input
              type="text"
              name="comment-name"
              className="post-field-form"
              onChange={e => {
                this.updateAuthor(e.target.value);
              }}
              value={this.state.author}
            />
          </div>
          <div className="post-field">
            <p className="post-field-label">パスワード</p>
            <input
              type="password"
              name="comment-password"
              className="post-field-form"
              onChange={e => {
                this.updatePassword(e.target.value);
              }}
              value={this.state.password}
            />
          </div>
          <div className="post-field">
            <p className="post-field-label">本文</p>
            <textarea
              name="comment-message"
              rows="5"
              className="post-field-form-textarea"
              value={this.state.message}
              onChange={e => {
                this.updateMessage(e.target.value);
              }}
            />
          </div>
          <div className="post-submit">
            <button
              className="post-btn"
              onClick={() => {
                this.handlePostComment();
              }}
            >
              投稿
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default connect(
  null,
  { postComment }
)(PostForm);
