import React from "react";
import { getBg } from "../getColor";

export const Count = (props) => {
  return <div style={getBg()}>{props.count}</div>;
};
