import React from "react";
import { getBg } from "../getColor";

export const Pure = React.memo(() => {
  return <div style={getBg()}>pure</div>;
});
