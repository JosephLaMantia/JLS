import React from "react";

import ArtShop from './ArtShop';
import SocialMedia from './SocialMedia';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default () => {
  return (
    
    <div id='projects-wrapper'>
        <div id='project-tile-wrapper'>
            <ArtShop/>
            <SocialMedia/>
        </div>
    </div>
  );
};
