import React from "react";

const WorksCard = ({
  companyLogo,
  companyName,
  date,
  role,
  details,
  workLink,
}) => {
  return (
    <>
      <div
        key={companyName}
        className="w-full border-2 border-white rounded-xl mt-4 p-10 md:px-32 md:py-20 md:space-x-32 flex justify-center md:justify-start flex-wrap md:flex-nowrap"
      >
        <div className="mb-6 p-4 md:mb-0 align-middle flex items-center md:w-2/3 w-4/5">
          <img src={companyLogo} alt="" />
        </div>

        <div className="flex flex-wrap justify-center text-center md:text-left md:block">
          <button
            key={companyName}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                workLink,
                "_blank" // <- This is what makes it open in a new window.
              );
            }}
          >
            <h3 className="text-white text-xl md:text-3xl font-bold hover:text-theme">
              {companyName}
            </h3>
          </button>

          <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-3 mt-3 mb-4 font-semibold text-sm md:text-xl">
            <div className="text-theme text-xs md:text-lg">{role}</div>
            <div className="hidden md:flex text-sm items-center text-gray-400">
              ({date})
            </div>
          </div>

          <p className="md:text-base text-sm">{details}</p>

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
};

export default WorksCard;
