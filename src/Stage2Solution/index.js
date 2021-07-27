import React, { useMemo, useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { Button } from "antd";
import { getBg } from "../getColor";

export const Context = React.createContext({});

const Stage2Solution = () => {
  const [count, setCount] = useState(0);
  const [, forceReRender] = useState({});

  const memorizeValue = useMemo(() => {
    return {
      count,
      setCount,
    };
  }, [count]);

  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Context.Provider value={memorizeValue}>
        <Count />
        <SetCount />
        <Pure />
      </Context.Provider>
    </>
  );
};

export default Stage2Solution;
