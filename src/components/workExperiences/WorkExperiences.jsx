import React from "react";

// Components
import WorkExperiencesCard from "./WorkExperiencesCard";

// Data
import { workExperiencesData } from "../../data";

const WorkExperiences = () => {


    return (
        <>
            <div id="experiences" className="container mt-32 md:flex md:justify-between items-center mx-auto px-8 md:px-14 w-full">
                <div className="w-full">
                    <h2 className="secondary-title">Work Experiences</h2>
                    <p className="section-paragraph">{workExperiencesData.details}</p>
                    <div className="flex-col">
                        {workExperiencesData.experiences.map(experience => (
                            <>
                                <WorkExperiencesCard {...experience} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkExperiences;