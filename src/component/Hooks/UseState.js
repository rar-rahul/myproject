import React, { useState } from "react";

function UseState() {
  const [state, setState] = useState(10);
  //  console.log(setState);
  return (
    <>
      <div className="button">
        <p className="text-center">{state}</p>
        <button
          className="btn btn-success btn-sm pr-2"
          onClick={() => setState(state + 1)}
        >
          INC
        </button>

        <button
          className="btn btn-success btn-sm"
          onClick={() => (state > 0 ? setState(state - 1) : setState(0))}
        >
          DESC
        </button>
      </div>
    </>
  );
}

export default UseState;
