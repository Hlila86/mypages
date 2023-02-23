import Layout from '@/components/Layout'
import React from 'react'
import styles from '../styles/classes.module.css'

const classes = () => {
  return (

    <Layout>

         <div className={styles.container}>

         <div className={styles.card}>
         <img
        className="d-block w-100"
        src="/img/yoga.jpg"
        alt="First slide"
      />
            <h1 className={styles.cardTitle}>Yoga</h1>

         </div>
         <div className={styles.card}>
         <img
        className="d-block w-100"
        src="/img/yoga.jpg"
        alt="First slide"
      />
            <h1 className={styles.cardTitle}>Yoga</h1>

         </div>
         <div className={styles.card}>
         <img
        className="d-block w-100"
        src="/img/yoga.jpg"
        alt="First slide"
      />
            <h1 className={styles.cardTitle}>Yoga</h1>

         </div>


         </div>
    </Layout>
   
  )
}

export default classes