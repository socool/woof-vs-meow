import React from "react";
import "./Cat.css";
import configData from "./config.json"

class Cat extends React.Component {
  constructor() {
    super();
    this.url = "https://api.thecatapi.com/v1/images/search";
    this.state = {
      img: "",
    };
  }

  componentDidMount() {
    this.fetchImg();
  }
  fetchImg = () => {
    fetch(this.url, {
      headers: {
        "x-api-key": configData.API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0 && data[0].url) {
          this.setState({ img: data[0].url });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleClick = () =>{
    this.props.win("cat")
  }

  render() {
    return (
      <div className="cat">
        <img alt="cat" src={this.state.img} />
        <button className="btn btn-bright" onClick={this.handleClick}>MEOW!</button>
      </div>
    );
  }
}

export default Cat;