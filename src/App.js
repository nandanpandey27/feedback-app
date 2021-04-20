import { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import "bootstrap/dist/css/bootstrap.min.css";
import { attemptAuth } from "./actions/auth.actions";
import Navbar from "./components/Navbar";
import Signup from "./containers/Signup";
import FeedbackList from "./containers/FeedbackList";
import FeedbackCreate from "./containers/FeedbackCreate";

function App({ auth = null, actions }) {
  const isSignupPage = !!useRouteMatch("/signup");
  const history = useHistory();

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      actions.attemptAuth(auth);
    }
  }, [actions]);

  useEffect(() => {
    auth && history.push("/feedbacks");
    !auth && history.push("/signup");
  }, [auth, history]);

  return (
    <>
      {!isSignupPage && <Navbar />}
      <div className="container mt-3">
        <Switch>
          <Route exact path="/signup" component={Signup} />

          {!!auth && (
            <>
              <Route exact path="/feedbacks" component={FeedbackList} />
              <Route
                exact
                path="/feedbacks/create"
                component={FeedbackCreate}
              />
            </>
          )}

          <Redirect exact path="/" to="/signup" />
        </Switch>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const authCb = (state) => state.auth;
  const authSelector = createSelector(authCb, (auth) => auth);
  return {
    auth: authSelector(state),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
