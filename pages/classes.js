import Layout from '@/components/Layout'
import React from 'react'
import styles from '../styles/classes.module.css'

const classes = () => {
  return (

    <Layout>

         <div>classes</div>

         <div className={styles.card}>
            <img  url="/img/yoga.webp"/>

         </div>
    </Layout>
   
  )
}

export default classes