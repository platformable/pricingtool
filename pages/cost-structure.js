import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
export default function CostStructure() {
  const router = useRouter();

  const [user, setUser] = useContext(UserContext);
  const { costModel, primaryObjective, apiCostModel, businessModel } = user;
  const [myOwnData, setMyOwnData] = useState({
    cost: null,
    year: null,
  });

  const [costModelList, setCostModelList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);

  const handleMyData = () => {
    let model = {};
    model.name = "I will add my own data";
    (model.cost = myOwnData.cost), (model.costYear = myOwnData.year);

    setUser({ ...user, apiCostModel: model });
  };

/*   useEffect(() => {
    handleMyData();
  }, [myOwnData.cost, myOwnData.year]); */

  return (
    <>
      <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="businessObjectives" className="">
          <div className="container mx-auto my-5 md:px-0 px-5">
            <p className="text-xs mb-1">Step 02</p>
            <div className="grid md:grid-cols-2 items-center">
              <h3 className="font-bold text-3xl text-main-color">
                Cost Structure
              </h3>
              <div className="pdf flex flex-col self-end items-end">
                <img src="/pdf icon.png" alt="" width={30} height={40} />
                <a className="hover:cursor-pointer">find out more</a>
              </div>
            </div>
          </div>
        </section>


    

        <section>
          <div className="container mx-auto">
            <div className="main-questions-cost-structure-container grid md:grid-cols-2 grid-cols-1 gap-10 ">
              <div className="cost-structure-box ">
                <div className="bank-form-list md:px-0 px-5">
                  <h5 className="text-lg">What is your API cost model?</h5>
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      className="relative bg-white w-full border rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-5/6"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                      onClick={() => setCostModelList(!costModelList)}
                    >
                      {apiCostModel.name
                        ? apiCostModel.name
                        : "select cost model"}
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          ariaHidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>

                    {costModelList && (
                      <ul
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        tabIndex="-1"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3"
                        onMouseLeave={() => setCostModelList(!costModelList)}
                      >
                        {businessModel.costModels?.map((model, index) => {
                          return (
                            <li
                              className="select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-200"
                              id="listbox-option-0"
                              role="option"
                              onClick={() =>
                                setUser({
                                  ...user,
                                  apiCostModel: model,
                                })
                              }
                              key={index}
                            >
                              <div className="flex items-center">
                                <span className="font-normal ml-3 block truncate">
                                  {model.name}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="cost-structure-box md:px-0 px-5">
                <h5 className="text-lg mb-4">Cost Category</h5>

                <div className="box grid grid-cols-2 gap-4">
                  <div className="box-category grid md:grid-cols-2 grid-cols-1  items-center ">
                    <div className="category-amount ">
                      {apiCostModel.name === "I will add my own data" ? (
                        <input
                          type="text"
                          className="px-4 border w-4/5 rounded self-auto text-sm py-2 cost-structure-input"
                          onChange={(e) =>
                            setMyOwnData({ ...myOwnData, cost: e.target.value })
                          }
                          placeholder="0"
                        />
                      ) : (
                        <input
                          type="text"
                          className="px-4 border rounded self-auto text-sm py-2 cost-structure-input"
                          value={apiCostModel ? apiCostModel?.cost: ""}
                        />
                      )}
                    </div>

                    <div>
                      <p className="text-xs md:my-0 my-2">One-off establishment costs ($)</p>
                    </div>
                  </div>
                  <div className="box-category grid md:grid-cols-2 grid-cols-1  items-center">
                    <div className="category-amount ">
                    {apiCostModel.name === "I will add my own data" ? (
                      <input
                        type="text"
                        className="px-4 border w-4/5 rounded self-auto  text-sm py-2 cost-structure-input"
                        onChange={(e) =>
                          setMyOwnData({ ...myOwnData, year: e.target.value })
                        }
                        placeholder="0"
                      />
                    ) : (
                      <input
                        type="text"
                        className="px-4 border rounded self-auto text-sm py-2 cost-structure-input"
                        value={apiCostModel ? apiCostModel?.costYear : ""}
                      />
                    )}
                    </div>

                    <div>
                      <p className="text-xs md:my-0 my-2">Anual operating costs ($)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="costStructure-questions" className="mt-10">
          <div className="container mx-auto">
           
            <section>
              <div className="container mx-auto grid md:grid-cols-3 gap-x-12 mt-10">
                <div className="cost-structure-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
                  <div className="flex justify-center mb-5">
                    <Image
                      src="/rolPeriodRecover_icon.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3 className="my-5">
                    {" "}
                    Over what Rol period (in number of years) do you want to
                    recover stablishment costs?
                  </h3>
                  <input
                    type="range"
                    min="1"
                    max="100"

                    className="slider"
                    id="rolPeriodrecoverInput"
                    onChange={(e) => {
                      setUser({ ...user, rolPeriodRecover: e.target.value });
                    }}
                    value={user.rolPeriodRecover ? user.rolPeriodRecover : ""}
                  />
                  <p className="text-center my-3 h-8">
                    {user.rolPeriodRecover ? user.rolPeriodRecover : "0"}
                  </p>
                </div>

                <div className="cost-structure-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
                  <div className="flex justify-center mb-5">
                    <img
                      src="/businessUnits_icon.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3 className="my-5">
                    {" "}
                    How many business units will be developing APIs this years?
                  </h3>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    id="businessUnitsInput"
                    onChange={(e) => {
                      setUser({ ...user, businessUnits: e.target.value });
                    }}
                    value={user.businessUnits ? user.businessUnits : ""}
                  />
                  <p className="text-center my-3 h-8">
                    {user.businessUnits ? user.businessUnits : "0"}
                  </p>
                </div>

                <div className="cost-structure-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
                  <div className="flex justify-center mb-5">
                    <img
                      src="bundledApis_icon.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <h3 className="my-5">
                    On average, how many bundled APIs will each business unit be
                    creating this year
                  </h3>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    id="bundledApis"
                    onChange={(e) => {
                      setUser({ ...user, bundledApis: e.target.value });
                    }}
                    value={user.bundledApis ? user.bundledApis : ""}
                  />
                  <p className="text-center my-3 h-8">
                    {user.bundledApis ? user.bundledApis : "0"}
                  </p>
                </div>
              </div>
            </section>

          {/*   <div className="mt-16">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                <Link href="/pricing-strategies">Continue</Link>
              </button>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
