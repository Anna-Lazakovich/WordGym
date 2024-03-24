import styles from './ButtonShowTranslation.module.css';

function ButtonShowTranslation (props) {
  const {onClick} = props;

  return (
    <button className={`${ styles.button }`} onClick={onClick}>Перевод</button>
    );
  };
  
  export default ButtonShowTranslation;