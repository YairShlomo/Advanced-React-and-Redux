import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route, Link } from "react-router-dom";

export default class App extends React.Component {
  renderButton() {}
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <Route path="/posts" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
