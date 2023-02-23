import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '@/components/Slider'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
      <Layout >
        <Slider />
        <h1>welcome to myPages</h1>
       </Layout>
      </>
    </>
  )
}
