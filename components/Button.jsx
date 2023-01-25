import React from 'react'
import styles from '../styles/Button.module.css';

const Button = ({text}) => {
    return (
        <>
            <button className={`${styles.btna} ${styles.btnb}`}>{text}</button>
        </>
    )
}

export default Button