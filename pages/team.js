import Layout from '@/components/Layout'
import React from 'react'
import styles from '../styles/Team.module.css'

const team = () => {
  return (

    <Layout>

         <div className={styles.container}>

         <div className={styles.card}>
  <img src="img/yoga.jpg" alt="John"  />
  <h1>John Doe</h1>
  <p className={styles.title}>CEO & Founder, Example</p>
  <p>Harvard University</p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button className={styles.btn}>Contact</button></p>
</div>



         </div>
    </Layout>
   
  )
}

export default team