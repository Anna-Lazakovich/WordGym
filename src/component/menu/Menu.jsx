import {Link} from "react-router-dom";
import logo from "../../img/logo.jpg";
import style from "./Menu.module.css";

function Menu() {
  return (
    <div className={style.menu}>
      <Link className={style.link} to='/main'><img className={style.logo} src={logo} alt="logo" /></Link>
      <nav className={style.navigation}>
        <Link className={style.link} to='/'></Link>
        <Link className={style.link} to='/main'>Главная </Link>
        <Link className={style.link} to='/game'>Игра </Link>
        <Link className={style.link} to='/task1week28'>Задание1 </Link>
      </nav>
    </div>
  );
}

export default Menu;
