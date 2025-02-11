//recieves a menu section (like dinner) and corresponding menuItems array
//renders multiple MenuItem components

import MenuItem from "../MenuItem";
import PropTypes from "prop-types";

const Menu = ({ menuName, menuItems }) => {
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItem key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number,
      itemPrice: PropTypes.string,
      itemName: PropTypes.string,
      itemDescription: PropTypes.string,
    })
  )
}

export default Menu;
