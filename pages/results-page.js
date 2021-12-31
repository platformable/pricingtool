import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'

export default function ResultsPage() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { apiProductName,primaryObjective,businessModel,apiCostModel,bundledApis } = user;

  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList,setBusinessModelList]=useState(false)

  console.log("apiCostModel",apiCostModel)

  return (
    <>
     <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="businessObjectives" className="">
          <div className="container mx-auto my-5">
            <button className="btn btn-border-main-bg-color  px-5 py-2 rounded  hover:cursor-pointer mt-5 shadow my-10" onClick={()=>router.back()}> Back </button>
            <h3 className="font-bold text-5xl text-main-color">
              Results
            </h3>
          </div>
        </section>
        <section id="businessObjectives-questions" className="mt-10">
          <div className="container mx-auto">
            <div className="form-container">
              
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-10">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Name of API Product
                </h5>
              </div>
              <div>
                <input type="text" className="border w-full rounded p-2 text-main-color" value={apiProductName}/>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  API product description
                </h5>
              </div>
              <div>
                <textarea className="border w-full rounded py-2 p-2 text-main-color"  value={user.apiDescription ? user.apiDescription: ""}></textarea>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Primary objective
                </h5>
              </div>
              <div>
              <input type="text" className="border w-full rounded p-2 text-main-color"  value={user.primaryObjective ? user.primaryObjective : "" }/>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Business Model
                </h5>
              </div>
              <div>
              <input type="text" className="border w-full rounded p-2 text-main-color"  value={user.businessModel ? user.businessModel : "" }/>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                
              <h5 className="text-gray-500 text-xl">
                  Pricing Model
                </h5>
              </div>
              <div>
              <h3 className="font-black">{user.pricingModel.name}</h3>
              <p className="xs-text my-2 text-xs  bg-main-color-light p-2 ">{user.pricingModel.definition}</p>
              <p className="xs-text my-2 text-xs italic bg-ob-light p-2">{user.pricingModel.example}</p>
              </div>
            </div>

            <section className="cost-anaylis bg-gray-50 my-5 p-5">
            <h3 className="text-3xl font-black">
                  Costs Analysis
                </h3>

                <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
              <h5 className="text-gray-500 text-xl">
                Cost model used
                </h5>
              </div>
              <div>
           
              <p className="xs-text my-2  p-2 ">{user.apiCostModel.name}</p>
        
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-1">
              <div>
              <h5 className="text-gray-500 text-xl">
                Buniness Units
                </h5>
              </div>
              <div>
           
              <p className="xs-text my-2  p-2 ">{user.businessUnits}</p>
        
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
              <h5 className="text-gray-500 text-xl">
                Bundled APIs
                </h5>
              </div>
              <div>
           
              <p className="xs-text my-2  p-2 ">{user.bundledApis}</p>
        
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
              <h5 className="text-gray-500 text-xl">
              Rol Period Recover
                </h5>
              </div>
              <div>
           
              <p className="xs-text my-2  p-2 ">{user.rolPeriodRecover}</p>
        
              </div>
            </div>



            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
              <h5 className="text-gray-500 text-xl">
              Initial stablishment cost($)
                </h5>
              </div>
              <div>
           
              <p className="xs-text my-2  p-2 ">{user.rolPeriodRecover}</p>
        
              </div>
            </div>
            </section>

           


            
{/* 
            <div className="mt-16">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow" disabled>
                <Link href="/cost-structure">Continue</Link>
              </button>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}
