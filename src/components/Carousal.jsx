import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import One from '../images/One.jpg';
import Two from '../images/Two.jpg';
import Three from '../images/Three.jpg';

export default Carousal =>  (
        <div class=" absolute z-10 top-[1450px] carousel-wrapper px-20 py-52 bg-transparent opacity-90 md:">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                
                    <img src={One}  className=' w-10' />
                </div>
                <div>
                <img src={Two} className=' w-10' />
                </div>
                <div>
                <img src={Three} className=' w-10' />
                </div>
            </Carousel>
        </div>
    );
