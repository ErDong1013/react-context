import React, { useContext } from "react";
import { SetCountContext } from ".";
import { getBg } from "../getColor";
import { Button } from "antd";

export const SetCount = () => {
  const setCount = useContext(SetCountContext);
  return (
    <Button style={getBg()} onClick={() => setCount((count) => count + 1)}>
      SetCount
    </Button>
  );
};
