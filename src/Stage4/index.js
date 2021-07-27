import React, { useState } from "react";
import { SetCount } from "./SetCount";
import { Count } from "./Count";
import { Pure } from "./Pure";
import { Button } from "antd";
import { getBg } from "../getColor";

const Stage4 = () => {
  const [, forceReRender] = useState({});
  return (
    <>
      <Button style={getBg()} onClick={() => forceReRender({})}>
        FORCE_RE_RENDER
      </Button>
      <Container
        render={(count, setCount) => {
          return (
            <>
              <Count count={count} />
              <SetCount setCount={setCount} />
            </>
          );
        }}
      >
        <Pure />
      </Container>
    </>
  );
};

const Container = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      {props.render(count, setCount)}
      {props.children}
    </>
  );
};

export default Stage4;
