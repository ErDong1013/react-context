import React, { useMemo, useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { Button } from "antd";
import { getBg } from "../getColor";

export const CountContext = React.createContext({});
export const SetCountContext = React.createContext({});

const Stage3 = () => {
  const [count, setCount] = useState(0);
  const [, forceReRender] = useState({});
  const memorizeValue = useMemo(() => {
    return {
      count,
    };
  }, [count]);

  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <CountContext.Provider value={memorizeValue}>
        <SetCountContext.Provider value={setCount}>
          <Count />
          <SetCount />
          <Pure />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </>
  );
};

export default Stage3;
