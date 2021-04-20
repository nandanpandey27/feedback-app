import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink, Link } from "react-router-dom";
import { attemptLogout } from "./../../actions/auth.actions";
import { Button } from "../Button";

function Navbar({ actions, auth = {} }) {
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
          <NavLink
            to="/feedbacks"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Feedback List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/feedbacks/create"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Feedback Create
          </NavLink>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Button variant="link nav-link" onClick={attemptLogout}>
            Logout({auth && auth.name})
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
