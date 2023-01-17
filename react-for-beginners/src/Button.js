// npm install prop-types 설치 후 사용
import PropTypes from "prop-types";
// CSS 모듈 (Button.module.css) 적용
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.protoTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
