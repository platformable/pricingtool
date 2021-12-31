import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  const router = useRouter();
  return (
    <>
   <Layout>
    <div className="flex flex-col  min-h-screen">
      <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero"> 
      <div className="container mx-auto h-screen grid items-center">
        <div className="hero-content grid grid-cols-2 py-5 items-center">
          <div>
          <h3 className="font-black text-6xl text-main-color mb-5">Estimate your API development costs</h3>
          <p className="text-gray-500">Find out how much it will cost to build an app and how long it will take to launch it.</p>
          <p className="text-gray-500 mb-5">An API cost calculator built with the user in mind.</p>
          <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow" onClick={()=>router.push("/business-objectives")}>Estimate your API cost</button>
          <button className="btn btn-border-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow" ><Link href="/" >Contact us</Link></button>
          </div>
          <div className="grid justify-end">
          {/* <img src="./heroImg.png" alt="" /> */}
          </div>
       </div>
      </div>
      </section>
     

   


      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://platformable.com/static/5319a443d00bd1eee2efee3fa63ac32c/bc86d/logo.webp" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
    </Layout>
    </>
  )
}