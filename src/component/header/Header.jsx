import logo from "../../img/WordGym.jpg";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="logo" />
    </header>
  );
}

export default Header;
