import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  goback = () => {
    if (this.state.index == 0) {
      this.setState({ index: images.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  gofront = () => {
    if (this.state.index == images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="arrow" onClick={this.goback}>
            <ArrowBackIosIcon/>
          </div>
          <div className="images-container">
            <img src={images[this.state.index].img} alt="" className="image" />
            <h1><span>{images[this.state.index].title}</span></h1>
            <h2><span>{images[this.state.index].subtitle}</span></h2>
          </div>
          <div className="arrow" onClick={this.gofront}>
            <ArrowForwardIosIcon/>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
