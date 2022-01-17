import React from "react";

const WorksCard = ({ companyLogo, companyName, date, role, details, workLink }) => {

    return (
        <>
            <div key={companyName} className="w-full border-2 border-white rounded-xl mt-4 p-16 md:px-32 md:py-20 md:space-x-32 flex justify-center md:justify-start flex-wrap md:flex-nowrap">

                <div className="mb-6 md:mb-0 align-middle flex items-center">
                    <img src={companyLogo} />
                </div>

                <div className="flex flex-wrap justify-center text-center md:text-left md:block">
                    <h3 className="text-white text-xl md:text-3xl font-bold">{companyName}</h3>

                    <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-3 mt-3 mb-4 font-semibold text-sm md:text-xl">
                        <div className="text-theme">{role}</div>
                        <div className="hidden md:flex text-gray-400">({date})</div>
                    </div>

                    <p className="text-xs">{details}</p>

                    {/* <div className="absolute left-0 right-0 mx-auto ">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    workLink,
                                    '_blank' // <- This is what makes it open in a new window.
                                );
                            }}
                            className="text-xs md:text-sm py-2 px-6 rounded-full border-white border-2 hover:border-theme hover:text-theme"
                        > View Details </button>
                    </div> */}
                </div>

            </div>
        </>
    );
}

export default WorksCard;