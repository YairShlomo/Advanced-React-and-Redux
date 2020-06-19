import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponents => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponents {...this.props} />;
    }
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
