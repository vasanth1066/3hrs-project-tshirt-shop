import classes from "./header.module.css";

function Header() {
  return (
    <div>
      <h1 className={classes.header}>T-SHIRT SHOP</h1>
      <button className={classes.button}>cart</button>
    </div>
  );
}

export default Header;
