import React from "react";

function withTooptip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    };
    handleMouseEnter = () => {
      this.setState({ showTooltip: true });
    };
    handleMouseOut = () => {
      this.setState({ showTooltip: false });
    };
    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseOut={this.handleMouseOut}
        >
          <Component {...this.props} showTooltip = {this.state.showTooltip}/>
        </div>
      );
    }
  };
}

export default withTooptip;
