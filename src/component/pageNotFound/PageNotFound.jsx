import donut from "../../img/donut.jpg";
import style from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <main className={style.pageNotFoundContainer}>
      <h1 className={style.h1}>ошибка</h1>
      <div className={style.pageNotFound}>
        4
        <img src={donut} className={style.donut} alt='Ошибка 404'></img>
        4
      </div>
        <p className={style.pageNotFoundText}>Ой! Кажется что-то пошло не так. Страница, которую вы пытаетесь загрузить, не существует.
        </p>
    </main>
  )
}

export default PageNotFound;
