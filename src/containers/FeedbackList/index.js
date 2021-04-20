import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

function FeedbackList({ feedbacks }) {
  const feedbackRows = feedbacks.map((feedback, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{feedback.title}</td>
      <td>{feedback.body}</td>
    </tr>
  ));

  return (
    <div className="row">
      <div className="col">
        <table className="table table-condensed table-bordered table-hover">
          <thead className="bg-dark text-light">
            <tr>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{feedbackRows}</tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const feedbackCb = (state) => state.feedbacks;
  const feedbackSelector = createSelector(feedbackCb, (feedbacks) => feedbacks);

  return {
    feedbacks: feedbackSelector(state),
  };
};

export default connect(mapStateToProps, null)(FeedbackList);
