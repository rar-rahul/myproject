import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "INC") {
    state = state + 1;
  }
  if (action.type === "DESC") {
    state = state - 1;
  }
  return state;
};

function UseReducer() {
  // const[state,setState] = useState(10);
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="button">
        <p className="text-center">{state}</p>
        <button
          className="btn btn-success btn-sm pr-2"
          onClick={() => dispatch({ type: "INC" })}
        >
          INC
        </button>

        <button
          className="btn btn-success btn-sm"
          onClick={() => dispatch({ type: "DESC" })}
        >
          DESC
        </button>
      </div>
    </>
  );
}

export default UseReducer;
