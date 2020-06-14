import { SAVE_COMMENT } from "./types";
import { FETCH_COMMENT } from "./types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComponents() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
}
