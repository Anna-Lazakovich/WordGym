import {Link} from "react-router-dom";
// import logo from "../../img/logo.jpg";
// import logo from "../../img/WordGym.jpg";
import style from "./Menu.module.css";

function Menu() {
  return (
    <>
      <nav className={style.menu}>
        <Link className={style.link} to='/'></Link>
        {/* <Link className={style.link} to='/main'><img className={style.logo} src={logo} alt="logo" /></Link> */}
        <Link className={style.link} to='/main'>Главная </Link>
        <Link className={style.link} to='/game'>Игра </Link>
      </nav>
    </>
  );
}

export default Menu