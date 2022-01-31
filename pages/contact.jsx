import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container mx-auto px-20 2xl:px-0">
          <div className="text-wrapper w-full">
            <h1 className="tittle">Contact Saya</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam ea eveniet porro? Similique, quod alias. Animi quae numquam et dignissimos ipsum nisi praesentium fuga, exercitationem, nobis non dicta tempore!</p>
            <ul className='contact-links'>
              <li className='contact-item'>Email : adiyulianto61@gmail.com</li>
              <li className='contact-item'>Phone : 0812 - 8190 - 3574</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
