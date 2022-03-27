import React from "react";
import { ReactSVG } from "react-svg";

const Icon = (props) => {
  return <ReactSVG src={`stackLogos/${props.name}.svg`} />;
};

export default Icon;
