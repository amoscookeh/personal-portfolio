import React from "react";

// Components
import AdventureCard from "./AdventureCard";

// Data
import { adventureData } from "../../data";

const MyWorks = () => {


    return (
        <>
            <div id="adventures" className="container mt-32 md:flex md:justify-between items-center mx-auto px-8 md:px-14 w-full">
                <div className="w-full">
                    <h2 className="secondary-title">Adventures</h2>
                    <p className="section-paragraph">{adventureData.details}</p>
                    <div className="workcards max-w-6xl mx-auto grid gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {adventureData.adventures.toReversed().map(adventure => (
                            <AdventureCard {...adventure} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWorks;