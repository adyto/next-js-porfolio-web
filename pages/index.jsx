import Link from "next/link";
import Image from "next/image";
import Navbar from '../components/navbar'
import Head from 'next/head'

export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
      <meta property="og:title" content="Home" key="title" />
    </Head>
    <Navbar />

    <section className="hero">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="tittle">Hallo, saya Adi Yulianto</h1>
          <p className="description">Saya seorang pekerja lepas pengembangan web, designer, editor vidio, dan full-stack developer</p>

          <Link href='/contact'>
            <a className="cta">Kontak Saya</a>
          </Link>
        </div>
        
        <div className="image-wrapper">
            <Image src="/illustrator.svg" alt="image" width="426" height="543"></Image>
          </div>
      </div>
    </section>
   </>
  )
}
