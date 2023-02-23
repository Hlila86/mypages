import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>

          
                <Link href="/" className={styles.logo}>MyFitness.</Link>
            

            <ul className={styles.menu}>
                <li>
                    <Link href="/classes" className={styles.linkItem}>Classes</Link>
                </li>
                <li>
                    <Link href="/team" className={styles.linkItem}>Team</Link>
                </li>
                <li>
                    <Link href="/pricing" className={styles.linkItem}>Pricing</Link>
                </li>
                <li>
                    <Link href="contact" className={styles.linkItem}>Contact</Link>
                </li>
            </ul>

            <div>
                <Link href="#" className={styles.linkItem}>Login</Link>
                <Link href="#" className={styles.linkItem}>Signup</Link>


            </div>
        </div>
    )
}

export default Navbar