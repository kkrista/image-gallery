import React from "react";
import ReactDOM from "react-dom";

function Button() {
  var Button = React.createClass({
    getInitialState: function () {
      return {
        bgColor: "red",
      };
    },

    handleClick: function () {
      this.setState({
        bgColor: "blue",
      });
    },

    render: function () {
      return (
        <div>
          <button
            onClick={this.handleClick}
            style={{ backgroundColor: this.state.bgColor }}
          >
            Button
          </button>
        </div>
      );
    },
  });

  ReactDOM.render(<Button />, document.getElementById("button"));
}

export default Button;