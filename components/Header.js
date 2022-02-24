import React, { useState, useContext,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { apiProductName, apiDescription, primaryObjective, businessModels } =
    user;
  const [errorMessage, setErrorMessage] = useState(false);

  const removeErrorMessage = ()=> {
    setUser({...user,errorMessage:false});
  }

  const handleNextStep = (route) => {
    if (
      apiProductName === "" ||
      apiDescription === "" ||
      primaryObjective === "" ||
      businessModels === ""
    ) {
      setUser({...user,errorMessage:!errorMessage});
      setTimeout(() => {removeErrorMessage()}, 3000);
    } else {

      router.push(route);
    }
  };

  useEffect(()=>{
    console.log("user.errorMessage: ", user.errorMessage)
  },[user.errorMessage])

  return (
    <section className="bg-blue head-navigation-container py-5">
      <div className="container mx-auto">
        {/* INDEX PAGE HEADER */}
        {router.asPath === "/" && (
          <div className="grid md:grid-cols-2 grid-cols-1 md:px-0 px-5">
            <div className="header-navigation-left flex md:justify-start justify-center md:mb-0 mb-5">
              <Image
                src="/Platformable Tools icon.png"
                alt=""
                width={602}
                height={245}
              />
            </div>
            <div className="header-navigation-right flex md:justify-end md:items-end justify-center">
              <a
                href="https://www.platformable.com/"
                target="_blank"
                className="font-black"
              >
                www.platformable.com
              </a>
            </div>
          </div>
        )}

        {/* INTERNAL PAGES HEADER  */}

        {router.asPath !== "/" && (
          <div className="grid md:grid-cols-7 grid-cols-1 gap-5 md:px-0 px-5 main-header">
            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-1"></div>
              <Link href="/business-objectives" className="">
                <div
                  className={`header-box ${
                    (router.asPath === "/business-objectives" &&
                      "active-nav") ||
                    (router.asPath !== "/" && "active-nav")
                  }`}
                >
                  <div className="header-icon">
                    <Image
                      src="/Business Objectives on.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="section-content">
                    <p className="font-black text-sm mb-2">
                      Business Objectives
                    </p>
                    <p className="text-xxs">
                      Business model dictates depth of fintech partnership,
                      required investments and recurring costs, target market
                      mix, and pricing strategies available for the API program
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-header"></div>
              <div
                className=""
                onClick={() => handleNextStep("/cost-structure")}
              >
                <div
                  className={`header-box ${
                    (router.asPath === "/cost-structure" && "active-nav") ||
                    (router.asPath === "/target-markets" && "active-nav") ||
                    (router.asPath === "/pricing-strategies" && "active-nav") ||
                    (router.asPath === "/price-settings" && "active-nav") ||
                    (router.asPath === "/results" && "active-nav")
                  }`}
                >
                  <div className="header-icon">
                    <Image
                      src="/Cost Structure off.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="section-content">
                    <p className="font-black text-sm mb-2">Cost Structure</p>
                    <p className="text-xxs">
                      Business model dictates depth of fintech partnership,
                      required investments and recurring costs, target market
                      mix, and pricing strategies available for the API program
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-header"></div>
              <Link href="/target-markets" className="">
                <div
                  className={`header-box ${
                    (router.asPath === "/target-markets" && "active-nav") ||
                    (router.asPath === "/pricing-strategies" && "active-nav") ||
                    (router.asPath === "/price-settings" && "active-nav") ||
                    (router.asPath === "/results" && "active-nav")
                  }`}
                >
                  <div className="header-icon">
                    <Image
                      src="/Target Market off.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="section-content">
                    <p className="font-black text-sm mb-2">Target Market</p>
                    <p className="text-xxs">
                      Business model dictates depth of fintech partnership,
                      required investments and recurring costs, target market
                      mix, and pricing strategies available for the API program
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-header"></div>
              <Link href="/pricing-strategies" className="hover:cursor-pointer">
                <div
                  className={`header-box ${
                    (router.asPath === "/pricing-strategies" && "active-nav") ||
                    (router.asPath === "/price-settings" && "active-nav") ||
                    (router.asPath === "/results" && "active-nav")
                  }`}
                >
                  <div className="header-icon">
                    <Image
                      src="/Pricing Strategies off.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="section-content">
                    <p className="font-black text-sm mb-2">
                      Pricing Strategies
                    </p>
                    <p className="text-xxs">
                      Business model dictates depth of fintech partnership,
                      required investments and recurring costs, target market
                      mix, and pricing strategies available for the API program
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-header"></div>
              <Link href="/price-settings">
                <div
                  className={`header-box ${
                    (router.asPath === "/price-settings" && "active-nav") ||
                    (router.asPath === "/results" && "active-nav")
                  }`}
                >
                  <div className="header-icon">
                    <Image
                      src="/Target Market off.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="section-content">
                    <p className="font-black text-sm mb-2">Price Settings</p>
                    <p className="text-xxs">
                      Business model dictates depth of fintech partnership,
                      required investments and recurring costs, target market
                      mix, and pricing strategies available for the API program
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="main-header-box hover:cursor-pointer">
              <div class="arrow-header"></div>
              <Link href="/results">
                <div
                  className={`header-box text-center ${
                    router.asPath === "/results" && "active-nav"
                  }`}
                >
                  <h3 className="font-black text-sm mb-1 ">
                    {" "}
                    Review & Download{" "}
                  </h3>
                  <div className="header-icon">
                    <Image
                      src="/final pdf miniature off.png"
                      alt=""
                      width={60}
                      height={90}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <Link href="/">
              <div className="grid grid-cols-1 md:px-0 px-5 hover:cursor-pointer">
                <div className="main-header grid items-center  md:mb-0 mb-5  ">
                  <Image
                    src="/Platformable Tools icon.png"
                    alt=""
                    width={602}
                    height={245}
                  />
                </div>
                <div className={`header-navigation-right`}>
                  <a
                    href="https://www.platformable.com/"
                    target="_blank"
                    className="font-black text-center flex justify-center"
                  >
                    www.platformable.com
                  </a>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
