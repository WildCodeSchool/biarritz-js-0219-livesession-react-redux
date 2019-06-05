import { AVATAR_HIDE, AVATAR_SHOW } from "./avatar.actions";

const initialState = {
  isVisible: true
};

export default function avatarReducer(state = initialState, action) {
  switch (action.type) {
    case AVATAR_HIDE:
      return { ...state, isVisible: false };
    case AVATAR_SHOW:
      return { ...state, isVisible: true };
    default:
      return state;
  }
}
