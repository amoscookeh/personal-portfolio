import React from "react";

const AdventureCards = ({ thumbnail, name, details, link }) => {

    return (
        <>
            <div key={name} className="bg-dark-body rounded-2xl w-80 h-80 mt-14 flex-col items-center justify-center mx-auto relative">
                <button onClick={(e) => {
                    e.preventDefault();
                    window.open(
                        link,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                }}>

                    <div className="w-full">
                        <img src={thumbnail} className="rounded-t-2xl" />
                    </div>
                    <div className="flex-col text-center pt-5">
                        <div className="font-semibold text-base md:text-lg">
                            {name}
                        </div>
                        <p className="w-3/4 font-normal text-xs md:text-base mx-auto pt-2 tracking-wide leading-relaxed">
                            {details}
                        </p>
                    </div>
                </button>
            </div>
        </>
    );
}

export default AdventureCards;