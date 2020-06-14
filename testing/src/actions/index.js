import { SAVE_COMPONENT } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMPONENT,
    payload: comment,
  };
}
