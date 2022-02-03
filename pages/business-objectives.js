import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { businessModels } from "../utils/businessModels";

export default function BusinessObjectives() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { primaryObjective, businessModel, apiProductName, apiDescription } =
    user;

  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);
  const [selectedCard,setSelectedCard]=useState([])
  
  const handleSelectedCard = (item )=>{

    const check = selectedCard.filter(card=>card.name===item.name)
    if(check.length===0){
      setUser({...user,pricingModel:item})
    setSelectedCard([item])
    } else{
      setSelectedCard([])
    }

  }


  const checkSelectedCard = (item)=>{
    const check = selectedCard?.filter(card=>card?.name===item?.name)
    if(check.length===0){
      return false
    }else {
      return true
    }
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="businessObjectives" className="">
          <div className="container mx-auto my-5">
            <p className="text-xs mb-1">Step 01</p>
            <div className="grid md:grid-cols-2 items-center">
              <h3 className="font-bold text-3xl text-main-color">
                Business Objectives
              </h3>
              <div className="pdf flex flex-col self-end items-end">
                <img src="/pdf icon.png" alt="" width={30} height={40} />
                <a className="hover:cursor-pointer">find out more</a>
              </div>
            </div>
          </div>
        </section>

        <section id="businessObjectives-questions" className="my-10">
          <div className="container mx-auto grid md:grid-cols-2 gap-4 grid-cols-1">
            <div className="business-objectives-left grid items-center">
              <div className="form-container">
                <div>
                  <h5 className="text-lg mb-2">
                    What is the name of your API Product?
                  </h5>
                </div>
                <div>
                  <input
                    type="text"
                    className="border w-full rounded p-2 text-main-color"
                    onChange={(e) => {
                      setUser({ ...user, apiProductName: e.target.value });
                    }}
                    value={user.apiProductName ? user.apiProductName : ""}
                  />
                </div>
              </div>

              <div className="form-container mt-1">
                <div>
                  <h5 className="text-lg mb-2">
                    Describe your API product
                  </h5>
                </div>
                <div>
                  <textarea
                    className="border w-full rounded py-2 p-2 text-main-color"
                    onChange={(e) =>
                      setUser({ ...user, apiDescription: e.target.value })
                    }
                    value={user.apiDescription ? user.apiDescription : ""}
                    rows="6"></textarea>
                </div>
              </div>

              <div className="form-container  mt-1">
                <div>
                  <h5 className="text-lg mb-2">
                    What is your primary objective of making these APIs
                    available?
                  </h5>
                </div>
                <div>
                  <textarea
                    type="text"
                    className="border w-full rounded p-2 text-main-color"
                    onChange={(e) =>
                      setUser({ ...user, primaryObjective: e.target.value })
                    }
                    value={user.primaryObjective ? user.primaryObjective : ""}
                    rows="6"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="business-objectives-right">
              <div className="main-form-container ">
                <div>
                  <h5 className="text-xl mb-2">
                    Which one of these business models are you considering?
                  </h5>
                </div>


                <div className="form-container grid md:grid-cols-2 grid-cols-1 gap-5">

                {businessModels.map((model, index) => {
                            return (
                              <div
                                className={`cards-container bg-white rounded shadow p-5 text-center h-100 ${checkSelectedCard(model) ? 'card-border ': " shadow"}`}
                                onClick={() =>
                                  setUser({ ...user, businessModel: model })
                                }
                                onMouseDown={()=>handleSelectedCard(model)}
                                key={index}
                              >
                                <Image src={model.icon} alt="" width={60} height={60}/>
                                  <h3 className="font-black my-5"> 
                                    {model.name}
                                  </h3>
                                  <p className="text-xs">{model.description}</p>
                             
                              </div>
                            );
                          })}
               
                </div>


                <div>
                  <div className="md:my-5 mt-5 bank-form-list md:px-0 px-5">
                    <div className="mt-1 relative">
                   {/*    <button
                        type="button"
                        className="relative text-main-color w-full border rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        onClick={() => setBusinessModelList(!businessModelList)}
                      >
                        {businessModel.name
                          ? businessModel.name
                          : "select business model"}
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
                      </button> */}

                      {/* {businessModelList && (
                        <ul
                          className="absolute z-10 mt-1 w-full bg-red-orange-dark shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                          tabIndex="-1"
                          role="listbox"
                          aria-labelledby="listbox-label"
                          aria-activedescendant="listbox-option-3"
                          onMouseLeave={() =>
                            setBusinessModelList(!businessModelList)
                          }
                        >
                          {businessModels.map((model, index) => {
                            return (
                              <li
                                className="select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-200"
                                id="listbox-option-0"
                                role="option"
                                onClick={() =>
                                  setUser({ ...user, businessModel: model })
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
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
