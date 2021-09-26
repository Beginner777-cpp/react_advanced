import React, { Component } from "react";
import withTooptip from "./withTooltip";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Tooltip</div>}
      </div>
    );
  }
}
export default withTooptip(Movie);
