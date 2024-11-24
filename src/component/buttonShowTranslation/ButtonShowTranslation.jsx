import styles from './ButtonShowTranslation.module.css';
import React, { useEffect, useRef } from 'react';

const ButtonShowTranslation = (props) => {
  const ref = useRef();

  useEffect(() => {
    if(ref.current) {
    ref.current.focus()
    }
    }, []);

  return (
    <button 
      className={styles.buttonShowTranslation} 
      onClick={props.onClick} 
      ref={ref}
    >Перевод</button>
  )
}
export default ButtonShowTranslation;