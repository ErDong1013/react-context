import React, { useContext } from "react";
import { Context } from ".";
import { getBg } from "../getColor";
import { Button } from "antd";

export const SetCount = React.memo(() => {
  const context = useContext(Context);

  return (
    <Button
      style={getBg()}
      onClick={() => context.setCount((count) => count + 1)}
    >
      SetCount
    </Button>
  );
});
