import React from "react";
import { connect } from "react-redux";

function Avatar({ dispatch, img, userScore }) {
  return (
    <div onClick={() => dispatch({ type: "RESET" })}>
      <h1>{userScore}</h1>
      <img src={img} />;
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userScore: state.value + 5
  };
}

export default connect(mapStateToProps)(Avatar);
