import React from 'react'
import styles from '../styles/Header.module.css';
import Image from 'next/image'


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Image
                    src='https://i.ibb.co/1JdV7q0/logo-color.png'
                    alt="logo"
                    width={200}
                    height={200}
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default Header