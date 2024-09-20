import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { Container } from "react-bootstrap";

import image1 from './assets/Certificates/Screenshot 2024-04-06 113324.png';
import image2 from "./assets/Certificates/Screenshot 2024-09-19 161300.png";
import image3 from "./assets/Certificates/Screenshot 2024-09-19 161331.png";
import image4 from "./assets/Certificates/Screenshot 2024-09-19 161440.png";
import image5 from "./assets/Certificates/Screenshot 2024-09-19 161536.png";
import image6 from "./assets/Certificates/Screenshot 2024-09-19 161612.png";
import image7 from "./assets/Certificates/Screenshot_20230106_180114.png";
import image8 from "./assets/Certificates/Screenshot_20230226_204733.png";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};
const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default class SpringCarousel extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: true,
    enableSwipe: true,
    config: config.slow,
    containerWidth: "80%",
    containerHeight: "300px"
  };

  slides = images.map((image, index) => ({
    key: uuidv4(),
    content: <img src={image} alt={`${index + 1}`} />,
    onClick: () => this.setState({ goToSlide: index }),
  }));

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* swipes left */
        this.setState((prevState) => ({
          goToSlide: (prevState.goToSlide + 1) % images.length,
          xDown: null,
          yDown: null
        }));
      } else {
        /* swipes right */
        this.setState((prevState) => ({
          goToSlide: (prevState.goToSlide - 1 + images.length) % images.length,
          xDown: null,
          yDown: null
        }));
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("resize", this.updateDimensions);
    this.autoSlideInterval = setInterval(() => {
      this.setState((prevState) => ({
        goToSlide: (prevState.goToSlide + 1) % images.length
      }));
    }, 3000);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("resize", this.updateDimensions);
    clearInterval(this.autoSlideInterval);
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        this.setState((prevState) => ({
          goToSlide: (prevState.goToSlide - 1 + images.length) % images.length
        }));
        break;
      case 39:
        this.setState((prevState) => ({
          goToSlide: (prevState.goToSlide + 1) % images.length
        }));
        break;
      default:
        break;
    }
  };

  updateDimensions = () => {
    if (window.innerWidth < 600) {
      this.setState({
        containerWidth: "90%",
        containerHeight: "150px",
        offsetRadius: 2,
        showNavigation: false,
      });
    } else { 
      this.setState({
        containerWidth: "80%",
        containerHeight: "300px",
        offsetRadius: 10,
        showNavigation: true,
      });
    }
  };

  render() {
    return (
      <Container id="Certificate">
        <h1 className="Contact-heading">
          Certificates
        </h1>
        <div
          style={{
            width: this.state.containerWidth,
            height: this.state.containerHeight,
            margin: "0 auto 50px auto",
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
          />
        </div>
      </Container>
    );
  }
}
