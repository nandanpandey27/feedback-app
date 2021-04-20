import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { attemptLogout } from "./../../actions/auth.actions";
import { Button } from "../Button";

function Navbar({ actions }) {
  const attemptLogout = () => {
    actions.attemptLogout(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <Link to="/" className="navbar-brand">
        Feedback App
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/feedbacks" className="nav-link">
            Feedback List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/feedbacks/create" className="nav-link">
            Feedback Create
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Button variant="link nav-link" onClick={attemptLogout}>
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        attemptLogout,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
