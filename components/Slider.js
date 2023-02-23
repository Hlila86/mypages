import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Slider.module.css'

const Slider = () => {
  return (
<div className={styles.container}>


    <Carousel className={styles.carousel}>
    <Carousel.Item className={styles.item}>
      <img
        className="d-block w-100"
        src="/img/slider1.jpg"
        alt="First slide"
      />
      <Carousel.Caption className={styles.caption}>
        <h3 className={styles.captionTitle}>First slide label</h3>
        <p>REAL PEOPLE
HELP YOU MAKE
REAL PROGRESS..</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <img
        className="d-block w-100"
        src="/img/slider2.jpg"
        alt="Second slide"
      />

      <Carousel.Caption className={styles.caption}>
        <h3 className={styles.captionTitle}>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className={styles.item}>
      <img
        className="d-block w-100"
        src="/img/slider3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption className={styles.caption}>
        <h3 className={styles.captionTitle}>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
  </div>

  
  )
}

export default Slider