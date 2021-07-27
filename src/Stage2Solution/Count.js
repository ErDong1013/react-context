import React, { useContext } from "react";
import { Context } from ".";
import { getBg } from "../getColor";

export const Count = React.memo(() => {
  const context = useContext(Context);
  return <div style={getBg()}>{context.count}</div>;
});
