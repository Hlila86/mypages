import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.logo}>

                <Link href="#">Mypages.</Link>
            </div>

            <ul className={styles.menu}>
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

            <div>
                <Link href="#">Login</Link>
                <Link href="#">Signup</Link>


            </div>
        </div>
    )
}

export default Navbar