import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Image from "next/image";

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
            <div className="container mx-auto md:h-screen grid items-center">
              <div className="hero-content grid md:grid-cols-2 grid-cols-1 py-5 items-center">
                <div className="md:px-5 lg:px-0 px-5">
                  <h3 className="font-black md:text-6xl text-3xl text-main-color mb-5">
                    Estimate your API development costs
                  </h3>
                  <p className="md:text-3xl text-xl md:my-10 my-2">
                    Find out how much it will cost to build an app and how long
                    it will take to launch it.
                  </p>
                  <p className="md:text-3xl text-xl md:my-10 my-2">
                    An API cost calculator built with the user in mind.
                  </p>
                  <div className="md:px-5 lg:px-0 px-5 grid md:grid-cols-2 grid-cols-1">
                  <button
                    className="btn bg-ob-dark text-white  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow w-100"
                    onClick={() => router.push("/business-objectives")}
                  >
                    Estimate your API cost
                  </button>
                  <button className="btn btn-main-bg-color text-white  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                    <Link href="/">Contact us</Link>
                  </button>
                  </div>
                </div>
                <div className="grid justify-end md:my-0 mt-10">
                  <Image
                    src="/API Monetization Tool Isometric.png"
                    alt="api pricing tool"
                    width="640" height="460"
                  />
                </div>
              </div>
            </div>
          </section>

         
        </div>
      </Layout>
    </>
  );
}
