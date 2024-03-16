import React from "react";
import Carousel, { CarouselItem } from "../shared/general/Carousel";

const CarouselAds = (props) => {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <img
            src="https://images.wallpaperscraft.com/image/single/croissant_coffee_dessert_221983_1280x720.jpg"
            width="1000"
            height="350"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.wallpaperscraft.com/image/single/shark_toy_glasses_140544_1280x720.jpg"
            width="1000"
            height="350"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.wallpaperscraft.com/image/single/cappuccino_coffee_mug_218324_1280x720.jpg"
            width="1000"
            height="350"
          />
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default CarouselAds;
