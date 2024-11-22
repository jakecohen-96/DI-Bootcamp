import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carouselComponent = () => {
    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
            <Carousel>
                <div>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg' alt='Hong Kong'></img>
                    <p className='legend'>Hong Kong</p>
                </div>
                <div>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp' alt='Monaco'></img>
                    <p className='legend'>Monaco</p>
                </div>
                <div>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp' alt='Jpan'></img>
                    <p className='legend'>Japan</p>
                </div>
                <div>
                    <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp' alt='Las Vegas'></img>
                    <p className='legend'>Las Vegas</p>
                </div>
            </Carousel>
        </div>
    );
};

export default carouselComponent;