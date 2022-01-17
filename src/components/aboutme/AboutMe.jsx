import React from "react";

// Components
import amosPhoto from "../../assets/images/amosPhoto.jpg";

// Data
import { aboutMeData } from "../../data";

const AboutMe = () => {

    return (
        <>
            <div id="about" className="container md:flex md:justify-between mt-12 items-center mx-auto px-8 md:px-14 w-full">
                <div className="md:w-2/3 w-full">
                    <h2 className="secondary-title">About Me</h2>
                    <div className="md:hidden flex justify-center mt-4">
                        <img src={amosPhoto} alt="" className="w-5/6 rounded-xl" />
                    </div>
                    <div className="flex-col justify-center w-full">
                        <p className="section-paragraph">{aboutMeData.general}</p>
                        <div className="flex items-center justify-center my-12 mx-auto">
                            <span className="text-lg md:text-2xl font-semibold">{aboutMeData.precursor}</span>
                            <div className="scroller md:ml-2 ml-2 text-xl md:text-3xl text-theme">
                                <span>
                                    {aboutMeData.cursors.map(cursor => (
                                        [cursor, <br key={cursor} />]
                                    ))}
                                </span>
                            </div>
                        </div>
                        <p className="section-paragraph">{aboutMeData.general2}</p>
                    </div>
                </div>
                <div className="hidden md:flex md:justify-center md:mt-4 md:w-1/3 md:ml-12">
                    <img src={amosPhoto} alt="" className="w-5/6 rounded-xl" />
                </div>
            </div>
        </>
    );
}

export default AboutMe;