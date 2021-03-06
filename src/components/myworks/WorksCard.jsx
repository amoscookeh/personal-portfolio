import React from "react";
import Icon from "../Icon";

const WorksCard = ({
  projectLogo,
  projectName,
  projectDetails,
  projectLink,
  inProgress,
  techStacks,
}) => {
  return (
    <>
      <div
        key={projectName}
        className="bg-dark-body rounded-2xl w-80 h-72 md:h-80 mt-14 flex-col items-center justify-center mx-auto relative"
      >
        <div className="w-1/4 block absolute -top-10 left-0 right-0 mx-auto">
          <img
            src={projectLogo}
            alt=""
            className={`rounded-2xl ${inProgress ? "hover:grayscale" : ""}`}
          />
          {inProgress ? (
            <div class="absolute top-1/3 left-0 w-full bg-theme">
              <p class="leading-normal font-semibold text-center text-xs text-gray-100">
                In Progress
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="flex-col text-center pt-14">
          <div className="font-semibold text-base md:text-lg">
            {projectName}
          </div>

          <p className="w-3/4 font-normal text-xs md:text-sm mx-auto pt-2 tracking-wide leading-relaxed">
            {projectDetails}
          </p>
          <div className="absolute bottom-5 left-0 right-0 mx-auto ">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  projectLink,
                  "_blank" // <- This is what makes it open in a new window.
                );
              }}
              className={`text-xs md:text-sm py-2 px-6 rounded-full border-white border-2 hover:border-theme hover:text-theme`}
            >
              {" "}
              {inProgress ? "View Progress" : "View Project"}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksCard;
