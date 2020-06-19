import axios from "axios";
import { AUTH_USER } from "./types";

export const signup = (formProps) => async (dispatch) => {
  const reponse = await axios.post("http://localhost:3090/signup", formProps);
  dispatch({ type: AUTH_USER, payload: respponse.data.token });
};
