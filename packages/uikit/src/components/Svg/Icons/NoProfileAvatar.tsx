import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 86 86" {...props}>
      <image width="86px" height="86px" href="/images/avatars.svg" />
    </Svg>
  );
};

export default Icon;
