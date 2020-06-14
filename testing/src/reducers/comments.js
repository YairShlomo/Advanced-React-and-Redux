import { SAVE_COMPONENT } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMPONENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
