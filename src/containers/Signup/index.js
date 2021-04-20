import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { attemptAuth } from "./../../actions/auth.actions";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

function Signup({ actions }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const auth = {
      name,
      email,
      comment,
    };
    localStorage.setItem("auth", JSON.stringify(auth));
    actions.attemptAuth(auth);
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <div className="card mt-5 shadow">
          <div className="card-header bg-dark">
            <h4 className="card-header-title text-light text-center">Signup</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <Input
                id="nameField"
                label="Name"
                placeholder="John Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Input
                id="emailField"
                label="Email"
                placeholder="john@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
              />
              <TextArea
                id="commectField"
                label="Comment"
                placeholder="Your comment here..."
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
              />

              <div className="form-group">
                <Button type="submit" variant="outline-dark" isFullwidth>
                  Signup
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        attemptAuth,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
