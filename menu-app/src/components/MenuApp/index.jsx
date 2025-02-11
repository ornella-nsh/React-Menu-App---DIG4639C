//root  component
//recieves the menuData array as a prop and passes each section to Menu component

import Menu from "../Menu";
import propTypes from "prop-types";

const MenuApp = ({ data }) => {
  return (
    <div className="menu-app">
      {data.map((menu) => (
        <Menu key={menu.menuName} {...menu} />
      ))}
    </div>
  );
};

MenuApp.propTypes = {
  //specifies that th data prop should be an array + type of elements
  data: propTypes.arrayOf(
    //each object should have a specific structure
    propTypes.shape({
      menuName: propTypes.string.isRequired,
      items: propTypes.arrayOf(
        propTypes.shape({
          itemName: propTypes.string.isRequired,
          price: propTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default MenuApp;
