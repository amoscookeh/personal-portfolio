import React from "react";

// Components
import WorksCard from "./WorksCard";

// Data
import { myWorksData } from "../../data";

const MyWorks = () => {


    return (
        <>
            <div id="myworks" className="container mt-32 md:flex md:justify-between items-center mx-auto px-8 md:px-14 w-full">
                <div className="w-full">
                    <h2 className="secondary-title">My Works</h2>
                    <p className="section-paragraph">{myWorksData.details}</p>
                    <div className="workcards max-w-6xl mx-auto grid gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {myWorksData.workItems.map(project => (
                            <WorksCard key={project.projectName} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWorks;