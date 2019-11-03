import { POST_COMMENT } from "./actionTypes";

export const postComment = content => ({
  type: POST_COMMENT,
  payload: content
});
