import React, { Component } from "react";
import "./AddFavorites.css";

class AddFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "black",
    };
  }
  boxClick = (e, props) => {
    this.setState({
      bgColor: "black",
    });
  };

  render() {
    return (
      <div className="addtofav">
        <span onClick={this.boxClick} className="mr-2">
          Add to{" "}
        </span>
        <button style={{ color: this.state.bgColor }} onClick={this.boxClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
      </div>
    );
  }
}
export default AddFavorites;