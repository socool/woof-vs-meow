import React from "react";
import "./Cat.css";

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
        "x-api-key": "a2f0d871-ee3c-484a-85e6-b1ec33520420",
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

  handelClick=()=>{}

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