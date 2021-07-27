import React, { useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { Button } from "antd";
import { getBg } from "../getColor";

const Stage1 = () => {
  const [count, setCount] = useState(0);
  const [, forceReRender] = useState({});
  console.log("render");
  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Count count={count} />
      <SetCount setCount={setCount} />
      <Pure />
    </>
  );
};

export default Stage1;
