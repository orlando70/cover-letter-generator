import React from 'react'
import styles from '../styles/TopSection.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
        <div className={styles.logo}>
            <Link href="/">
                <Image
                    src='https://i.ibb.co/b7Q8rD2/cova-high-resolution-logo-color-on-transparent-background.png'
                    alt="logo"
                    width={100}
                    height={50}
                    className={styles.img}
                />
            </Link>
            </div>
  )
}

export default Header