import React, { Component } from "react";

export default ChildComponents => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponents />;
    }
  }
  return ComposedComponent;
};
