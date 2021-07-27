import React from "react";
import { getBg } from "../getColor";
import { Button } from "antd";

export const SetCount = React.memo((props) => {
  return (
    <Button
      style={getBg()}
      onClick={() => props.setCount((count) => count + 1)}
    >
      SetCount
    </Button>
  );
});
