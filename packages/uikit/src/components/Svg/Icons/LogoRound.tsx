import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96px" height="96px" href="/logo.png" />
    </Svg>
  );
};

export default Icon;
