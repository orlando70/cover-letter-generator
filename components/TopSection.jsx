import React from 'react';
import styles from '../styles/TopSection.module.css';
import Link from 'next/link';
import Header from './Header';
import Button from './Button';


const TopSection = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p>Supercharge your <span>job search</span> with AI</p>
                </div>
            <div className={styles.description}>
                    <p>Increase your chances of landing an interview by generating highly personalized and professional cover letter that are tailored to the specific job you are applying for.</p>
                </div>
            <Link href="/generate">
                    <Button text={"Try it for free"}/>
                </Link>
            <span>No Email. No Signup.</span>
            </div>
        </div>
    )
}

export default TopSection