import classes from "./header.module.css";
import HeaderButton from "./HeaderButton";

function Header(props) {
  return (
    <div>
      <h1 className={classes.header}>T-SHIRT SHOP</h1>
      <HeaderButton onClick={props.onshowhandler}></HeaderButton>
    </div>
  );
}

export default Header;
