import { combineReducers } from "redux";
import avatar from "./pills/avatar/avatar.reducer";
import counter from "./pills/counter/counter.reducer";

export default combineReducers({
  avatar,
  counter,
  toto: (state = {}, action) => {
    return state;
  }
});
