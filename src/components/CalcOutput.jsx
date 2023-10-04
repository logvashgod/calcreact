import React from "react";

function CalcOutput({ input, result }) {
  return (
    <div>
      <p>{input}</p>
      {result && <p>Res: {result}</p>}
    </div>
  );
}

export default CalcOutput;
