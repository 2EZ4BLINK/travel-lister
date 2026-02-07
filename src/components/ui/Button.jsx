import styles from "../Button.module.css";

const Button = (props) => {
  const { onClick, children, type } = props;

  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;
