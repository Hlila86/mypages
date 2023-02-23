import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>

          
                <Link href="#" className={styles.logo}>Mypages.</Link>
            

            <ul className={styles.menu}>
                <li>
                    <Link href="#" className={styles.linkItem}>Tshirt</Link>
                </li>
                <li>
                    <Link href="#" className={styles.linkItem}>Pants</Link>
                </li>
                <li>
                    <Link href="/pricing" className={styles.linkItem}>Pricing</Link>
                </li>
                <li>
                    <Link href="#" className={styles.linkItem}>Mode</Link>
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