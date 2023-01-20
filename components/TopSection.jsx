import React from 'react';
import styles from '../styles/TopSection.module.css';

const TopSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <p>Craft a captivating cover letter.</p>
                    <p>Assisted by AI.</p>
                </header>
                <div className={styles.description}>
                    <p>Increase your chances of landing an interview by generating highly personalized and
                        professional-sounding cover letter that are tailored to the specific job you are
                        applying for.
                    </p>
                </div>
                <button>Try it for free</button>
                <span>No Email. No Signup.</span>
            </div>
        </section>
    )
}

export default TopSection