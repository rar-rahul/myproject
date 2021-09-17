import React from "react";

function Product({ menuData }) {
  console.log(menuData);
  return (
    <>
      {menuData.map((currentData) => {
        return (
          <div className="card-container">
            <div className="card col-md-3">
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {currentData.id}
                  <br />
                </span>
                <span className="card-author subtle">{currentData.title}</span>
                <img src={currentData.thumbnailUrl} alt="image" />
                <br />
                <button className="btn btn-sm btn-success">BuyNow</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
