import classes from "./header.module.css";
function HeaderButton(props) {
  return (
    <button onClick={props.onClick} className={classes.button}>
      View Cart
    </button>
  );
}
export default HeaderButton;
