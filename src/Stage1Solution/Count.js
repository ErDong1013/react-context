import React from "react";
import { getBg } from "../getColor";

export const Count = React.memo((props) => {
  return <div style={getBg("255,1,1")}>{props.count}</div>;
});
