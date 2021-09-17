import React, { useState } from "react";
//import './style.css';
import Menu from "./MenuApi.js";
import Product from "./Product.js";

function Restarent() {
  const [menuData, setmenuData] = useState(Menu);
  // console.log(menuData);

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item">Maggie</button>
        </div>
      </nav>

      <h4 className="text-center">Listing Menu</h4>

      <Product menuData={menuData} />
    </>
  );
}

export default Restarent;
