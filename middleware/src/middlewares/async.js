import { act } from "react-dom/test-utils";

export default ({ dispatch }) => (next) => (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
