import React, { useState } from "react";

const Todo = () => {
  const [state, setState] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!state) {
      alert("Pls Insert Data");
    } else {
      setItems([...items, state]);
    }
    return setState("");
  };
  console.log(items);
  return (
    <>
      <div className="card col-md-4 offset-3 mt-4">
        <div className="card-body">
          <div>
            <span className="title">Name</span>
            <input
              type="text"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-block btn-success mt-3"
              onClick={addItem}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid col-md-6 offset-2 border-1 mt-5">
        <h4 className="text-center text-danger">List Items</h4>
        <div className="col-md-12">
          {items.map((currentEle, index) => {
            return (
              <div className="text-justify col-md-6" id={index + 1} key={index}>
                {currentEle}
                <div className="pull-right ">
                <i className="btn btn-sm btn-success">Edit</i>   
                <i className="btn btn-danger btn-sm">Delete</i>
                </div>
               
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default Todo;
