import "./Button.scss";

const variants = {
  primary: "button--primary",
  secondary: "button--secondary",
  delete: "button--delete",
};

export default function Button(props) {
  let classNames = "button ";
  classNames += variants[props.variant];

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      onClick={onClick}
      type={props.type || "button"}
      className={classNames}
    >
      {props.icon && <img src={props.icon} alt="" />}
      {props.title}
    </button>
  );
}
