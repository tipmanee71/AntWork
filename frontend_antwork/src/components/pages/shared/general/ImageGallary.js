import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style/ImageGallary.css";

class ImageGallaryComponent extends React.Component {
  render() {
    return (
      <div>
        <Carousel autoPlay interval="5000" transitionTime="400">
          <div>
            <img src="https://picsum.photos/700/400?img=1" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=2" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=3" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=4" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=5" />
          </div>
          <div>
            <img src="https://picsum.photos/700/400?img=6" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageGallaryComponent;
