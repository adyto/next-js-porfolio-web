import Navbar from "../components/navbar"
import Head from "next/head"

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta property="og:title" content="About" key="title" />
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="tittle">Profile</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam ea eveniet porro? Similique, quod alias. Animi quae numquam et dignissimos ipsum nisi praesentium fuga, exercitationem, nobis non dicta tempore!</p>
          </div>
        </div>
      </section>
   </>
  )
}
  