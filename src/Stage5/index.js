import React, { useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { getBg } from "../getColor";
import { Button } from "antd";

export const CountContext = React.createContext({});
export const SetCountContext = React.createContext({});

const Stage5 = () => {
  const [, forceReRender] = useState({});
  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Container>
        <Count />
        <SetCount />
        <Pure />
      </Container>
    </>
  );
};

const Container = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        {props.children}
      </SetCountContext.Provider>
    </CountContext.Provider>
  );
};

export default Stage5;
