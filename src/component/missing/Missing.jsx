import donut from "../../img/donut.jpg";
import style from './Missing.module.css';

function Missing() {
  return (
    <main className={style.missingPage}>
      <h1 className={style.h1}>ошибка</h1>
      <div className={style.missing}>
        4
        <img src={donut} className={style.donut} alt='Ошибка 404'></img>
        4
      </div>
        <p className={style.missingText}>Ой! Кажется что-то пошло не так. Страница, которую вы пытаетесь загрузить, не существует.
        </p>
    </main>
  )
}

export default Missing;
