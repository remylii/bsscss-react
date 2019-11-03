import { POST_COMMENT } from "../actionTypes";

let latestId = 2;
let initializeState = {
  title: "",
  comments: [
    {
      id: 1,
      author: "Dockerに魂を引かれた人",
      password: "default",
      message:
        "コンテナの状態には、(created|restarting|removing|running|paused|exited) があるらしいが、docker container ls で表示される",
      datetime: "2019/10/30 14:30:00"
    },
    {
      id: 2,
      author: "色相環おじさん",
      password: "default",
      message:
        "色相環は虚構のシステムである。（あと色立体も）なので参考にするのは良いけど、色相環にとらわれてばかりいると、思考の幅が狭くなる。色というのはまわりを見渡すだけでも一杯ある。色相環にある色ばかりが色ではない",
      datetime: "2019/10/30 14:30:00"
    }
  ]
};

export default function thread(state = initializeState, action) {
  switch (action.type) {
    case POST_COMMENT:
      const newComment = action.payload;
      newComment.id = ++latestId;
      const comments = state.comments.concat(newComment);

      return {
        ...state,
        comments
      };
    default:
      return state;
  }
}
