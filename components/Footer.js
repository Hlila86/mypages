import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
const Footer = () => {
    return (

        <div className={styles.container}>

            <div className={styles.left}>
                <h2 className={styles.title}>ABOUT</h2>
                footer left

                <div className={styles.social}>
                <BsFacebook  className={styles.facebook} />
                <AiFillInstagram />
                <FaTiktok />
                </div>

            </div>

            
            <div className={styles.center}>
            <h2 className={styles.title}>CATEGORIES</h2>
            <ul>
                <li>
                    <Link href="#">Tshirt</Link>
                </li>
                <li>
                    <Link href="#">Pants</Link>
                </li>
                <li>
                    <Link href="#">Kids</Link>
                </li>
                <li>
                    <Link href="#">Mode</Link>
                </li>
            </ul>
            </div>

            
            <div className={styles.right}>
            <h2 className={styles.title}>QUICK LINKS</h2>
            <ul>
                <li>
                    <Link href="#">About Us</Link>
                </li>
                <li>
                    <Link href="#">Contact Us</Link>
                </li>
                <li>
                    <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#">Sitemap</Link>
                </li>
            </ul>
            </div>
        </div>

    )
}

export default Footer