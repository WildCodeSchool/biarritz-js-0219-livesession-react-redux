import React from "react";
import { connect } from "react-redux";

import AvatarView from "./avatar.view";
import { show, hide } from "./avatar.actions";

function Avatar({ dispatch, isVisible }) {
  return (
    <AvatarView
      onClick={() => (isVisible ? dispatch(hide()) : dispatch(show()))}
      score={54464654}
      isVisible={isVisible}
    />
  );
}

function mapStateToProps(state) {
  return {
    isVisible: state.avatar.isVisible
  };
}

export default connect(mapStateToProps)(Avatar);
