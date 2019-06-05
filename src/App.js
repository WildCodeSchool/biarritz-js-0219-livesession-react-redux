import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { show } from "./pills/avatar/avatar.actions";

function App({ dispatch, toto, louis, monSuperNombre }) {
  return (
    <div className="App">
      <NavBar />
      <pre>{toto}</pre>
      <pre>{louis}</pre>
      <pre>{monSuperNombre}</pre>
      <button onClick={() => dispatch(show())}>YEY</button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    toto: "AAAA",
    louis: ":)",
    monSuperNombre: state.value
  };
}
export default connect(mapStateToProps)(App);
