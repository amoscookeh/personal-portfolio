import React from "react";

// Components
import heroImg from "../../assets/images/amos.JPG";

// Data
import { heroData } from "../../data";

const Hero = () => {

    return (
        <>
            <div id="home" className="relative w-full h-auto overflow-hidden">
                <img src={heroImg} className="object-cover w-full h-full" />
                <div className="anim-typewriter line-1 hero-image absolute mx-auto w-full inset-x-0 text-xl md:text-5xl text-center leading-6 translate-y-1/2">
                    <span>{heroData.quote}</span>
                    <span className="font-bold">{heroData.emphasis}</span>
                </div>
            </div>
        </>
    );
}

export default Hero;