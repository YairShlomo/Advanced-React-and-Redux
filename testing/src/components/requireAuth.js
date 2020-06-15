import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponents) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponents />;
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
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
