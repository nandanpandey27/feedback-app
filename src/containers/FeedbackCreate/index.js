import React, { useState } from "react";
import { createFeedback } from "./../../actions/feedbacks.actions";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";

function FeedbackCreate({ actions }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    actions.createFeedback({
      title,
      body,
    });

    history.push("/feedbacks");
  };

  return (
    <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="card mt-5">
          <div className="card-header bg-dark">
            <h3 className="card-header-title text-center text-light">
              Create Feedback
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <Input
                id="titleField"
                value={title}
                label="Title"
                placeholder="Feedback Title"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <TextArea
                id="bodyField"
                value={body}
                label="Body"
                placeholder="Feedback Body"
                onChange={(event) => setBody(event.target.value)}
                required
              />

              <div className="form-group">
                <Button variant="outline-dark" isFullwidth type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        createFeedback,
      },
      dispatch
    ),
  };
};

export default connect(null, mapDispatchToProps)(FeedbackCreate);
