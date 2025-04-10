import {Link} from "react-router-dom";
import style from "./Menu.module.css";

function Menu() {
  return (
    <>
      <nav className={style.menu}>
        <Link className={style.link} to='/'></Link>
        <Link className={style.link} to='/main'>Wordlist </Link>
        <Link className={style.link} to='/game'>Practice </Link>
      </nav>
    </>
  );
}

export default Menu