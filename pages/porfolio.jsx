import Navbar from '../components/navbar'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

export default function Porfolio() {
  return (
    <>
      <Head>
        <title>Porfolio</title>
        <meta property="og:title" content="Porfolio" key="title" />
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="tittle">Porfolio</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam ea eveniet porro? Similique, quod alias. Animi quae numquam et dignissimos ipsum nisi praesentium fuga, exercitationem, nobis non dicta tempore!</p>

            <div className='porfolio-wrapper'>
              <div className='porfolio-item'>
                <Image src='/gambar1.png' alt='image food recipes' width={500} height={500} className='porfolio-image'/>
                <h4 className='porfolio-name'>Food Recipes</h4>
                <div className='porfolio-category'> Web Developer</div>
              </div>
              <div className='porfolio-item'>
                <Image src='/gambar2.png' alt='image nft marketplace' width={500} height={500} className='porfolio-image'/>
                <h4 className='porfolio-name'>NFT Marketplace</h4>
                <div className='porfolio-category'> Mobile Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
