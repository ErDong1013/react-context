import React, { useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { getBg } from "../getColor";
import { Button } from "antd";

export const CountContext = React.createContext({});
export const SetCountContext = React.createContext({});

const Stage5Solution = () => {
  const [, forceReRender] = useState({});
  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Container />
    </>
  );
};

const Container = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <AppBarrier />
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
};

const AppBarrier = React.memo(() => {
  return (
    <>
      <Count />
      <SetCount />
      <Pure />
    </>
  );
});

export default Stage5Solution;
