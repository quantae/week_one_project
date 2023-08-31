import React from 'react'
import styles from './button.module.css'

const Button = ({label="Learn More", btnStyle}) => {
  return (
    <div>
      <button className={`${styles.button} ${btnStyle}`}>{label}</button>
    </div>
  )
}

export default Button;
