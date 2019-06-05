export const AVATAR_SHOW = "@avatar/SHOW";
export const AVATAR_HIDE = "@avatar/HIDE";

export function hide() {
  return {
    type: AVATAR_HIDE
  };
}

export function show() {
  return {
    type: AVATAR_SHOW
  };
}
