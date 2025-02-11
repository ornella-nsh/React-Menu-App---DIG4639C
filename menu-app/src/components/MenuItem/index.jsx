//displays individual menu item details

//import React from "react"; or 
//import React, { Component } from "react"; not needed because not using react directly in components (via chatgpt.com)

//'itemId', 'itemPrice', 'itemName', 'itemDescription' are missing in props validation
// => npm install prop-types
// => import PropTypes from "prop-types";
// => PropTypes validation: MenuItem.propTypes = { ... };

import PropTypes from "prop-types";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div className="menu-item" id={`menu-item-${itemId}`}>
      <span>${itemPrice}</span>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
};

//proptypes validation
MenuItem.propTypes = {
  //not itemId: PropTypes.number.isRequired, because it's not required
  itemId: PropTypes.number,
  itemPrice: PropTypes.string,
  itemName: PropTypes.string,
  itemDescription: PropTypes.string,
};

export default MenuItem;