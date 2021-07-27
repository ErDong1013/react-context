import React, { useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { Button } from "antd";
import { getBg } from "../getColor";

export const Context = React.createContext({});

const Stage2 = () => {
  const [count, setCount] = useState(0);
  const [, forceReRender] = useState({});
  console.log("render");
  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Context.Provider value={{ count, setCount }}>
        <Count />
        <SetCount />
        <Pure />
      </Context.Provider>
    </>
  );
};

export default Stage2;
