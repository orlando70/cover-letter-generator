import React from 'react'
import styles from '../styles/TopSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GitHubButton from 'react-github-btn'
import logo from "../public/cova-high-resolution-logo-color-on-transparent-background.png"


const Header = () => {
    return (
        <>
            <div className={styles.topHeader}>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        width={100}
                        height={50}
                        className={styles.img}
                    />
                </Link>
                <GitHubButton href="https://github.com/orlando70/cover-letter-generator" data-size="large" aria-label="Star orlando70/cover-letter-generator on GitHub">Star</GitHubButton>
            </div>
        </>
    )
}

export default Header