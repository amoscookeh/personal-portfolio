import React from "react";

// Components
import menuIcon from "../../assets/icons/more.png"

const Navbar = (props) => {

    const handleClick = () => {
        props.setShowMenu(!props.showMenu);
    }

    return (<>
        <div className="bg-dark-body flex justify-between items-center md:py-6 py-3 mx-auto w-full">
            <div className="text-lg px-8 md:px-14 lg:px-24">Amos Liew</div>
            <div className="hidden md:flex">
                {props.children}
            </div>
            <div className="md:hidden">
                <button className="w-6 object-contain mx-8" onClick={() => { handleClick(); }}><img src={menuIcon} alt="" /></button>
            </div>
        </div>
        {
            (<div style={{ transition: 'all 500ms ease-in-out', height: props.showMenu ? '250px' : '0px' }} className={`flex-col text-center bg-dark-body`}>
                {props.children}
            </div>)
        }
    </>);
}

export default Navbar;