import styles from './ButtonShowTranslation.module.css';
import React, { forwardRef } from 'react';

const ButtonShowTranslation = forwardRef((props) => (
  <button className={`${ styles.button }`} 
    onClick={() => props.onClick()} 
    buttonRef={props.buttonRef}>Перевод</button>
    ));
    
export default ButtonShowTranslation;