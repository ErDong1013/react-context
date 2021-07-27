import React, { useContext } from "react";
import { CountContext } from ".";
import { getBg } from "../getColor";

export const Count = React.memo(() => {
  const count = useContext(CountContext);
  return <div style={getBg()}>{count?.count}</div>;
});
