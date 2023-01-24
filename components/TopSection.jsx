import React from 'react';
import styles from '../styles/TopSection.module.css';
import Image from 'next/image';
import Link from 'next/link';


const TopSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src='https://i.ibb.co/b7Q8rD2/cova-high-resolution-logo-color-on-transparent-background.png'
                    alt="logo"
                    width={100}
                    height={50}
                    className={styles.img}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p>Supercharge your</p>
                    <span>job search</span>
                </div>
                <div className={styles.description}>
                    <p>Increase your chances of landing an interview by generating highly personalized</p>
                    <p>and professional-sounding cover letter that are tailored to the specific job you are applying for.</p>
                </div>
                <Link href="/generate">
                    <button className={`${styles.btna} ${styles.btnb}`}>Try it for free</button>
                </Link>
                <span>No Email. No Signup.</span>
                <div></div>
            </div>
        </div>
    )
}

export default TopSection