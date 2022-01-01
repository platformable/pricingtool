import React, { useState, useContext,useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'
export default function CostStructure() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { costModel ,primaryObjective,apiCostModel} = user;
  const [myOwnData,setMyOwnData]=useState({
    cost:null,
    year:null
  })

  const [costModelList, setCostModelList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);

  const costModels = [
    {
    name:'I will add my own data',
    cost:myOwnData.cost,
    costYear:myOwnData.year
    },
  {
    name:   'Germain Bahri Cost Model - BaaS/full stack digital bank',
    /* cost: parseInt(1511800).toLocaleString('en-US', { style: 'currency', currency: 'USD' }), */
    cost: 1511800,
    /* costYear:parseInt(2674700).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) */
    costYear:2674700
    },
    {
    name:   'Germain Bahri Cost Model - Traditional, Manufacturing',
    /* cost: parseInt(581500).toLocaleString('en-US', { style: 'currency', currency: 'USD' }), */
    cost: 581500,
    /* costYear:parseInt(2674700).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) */
    costYear:2674700
    },
    {
    name:   'Germain Bahri Cost Model - Distribution',
    /* cost: parseInt(581500).toLocaleString('en-US', { style: 'currency', currency: 'USD' }), */
    cost:581500,
    /* costYear:parseInt(1511800).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) */
    costYear:1511800
    },
    {
    name:   'Starling Bank Cost Model - BaaS/full stack digital bank',
    /* cost: parseInt(5984000).toLocaleString('en-US', { style: 'currency', currency: 'USD' }), */
    cost:5984000,
    /* costYear:parseInt(113152000).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) */
    costYear:113152000
    },
  ]

  const handleMyData = ()=>{

 
    let model={}
    model.name="I will add my own data"
    model.cost=myOwnData.cost,
    model.costYear=myOwnData.year

    setUser({...user,apiCostModel:model})


  }

  useEffect(()=>{
    handleMyData()
  },[myOwnData.cost,myOwnData.year])

  return (
    <>
    <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="costStructure" className="">
          <div className="container mx-auto my-5">
            <button
              className="btn btn-border-main-bg-color  px-5 py-2 rounded  hover:cursor-pointer mt-5 shadow my-10"
              onClick={() => router.back()}
            >
              Back
            </button>
            <h3 className="font-bold text-5xl text-main-color">
              Cost Structure
            </h3>
          </div>
        </section>
        <section id="costStructure-questions" className="mt-10">
          <div className="container mx-auto">
            <div className="form-container grid grid-cols-3 gap-x-4 items-center mt-10">
              <div>
                <h5 className="text-gray-500 text-3xl">
                  What is your API cost model?
                </h5>
              </div>
              <div>
                <div className="md:my-5 mt-5 bank-form-list md:px-0 px-5">
                  <div className="mt-1 relative">
                    <button
                      type="button"
                      className="relative text-gray-500 w-full border rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                        {costModels.map((model,index)=>{
                          return (
                            <li
                            className="select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-200"
                            id="listbox-option-0"
                            role="option"
                            onClick={() =>
                              setUser({
                                ...user,
                                apiCostModel:model
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
                          )
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="cost-model-boxes grid grid-cols-1 gap-x-4">
                          <div className="box grid grid-cols-2 gap-x-4">
                            <div className="box-category">
                              <h5>Cost Category</h5>
                   
                              <p className="text-xs text-gray-400">One-off establishment costs ($)</p>
                              </div>
                              <div className="category-amount grid justify-end self-auto">
                              {apiCostModel.name ==="I will add my own data" ? 
                              <input type="number"  className="px-4 border background-red-50 rounded self-auto text-center" onChange={(e)=>setMyOwnData({...myOwnData,cost:e.target.value})} placeholder="data"/> 
                              : <input type="number"  className="px-4 border rounded self-auto text-center" value={apiCostModel? apiCostModel?.cost:""}  />}
                              </div>
                          </div>

                          <div className="box grid grid-cols-3 gap-x-4">
                            <div className="box-category">
                              <p className="text-xs text-gray-400">Anual operating costs ($)</p>
                              </div>
                              <div>
                                
                              </div>
                              <div className="category-amount grid justify-end self-auto">
                              {apiCostModel.name ==="I will add my own data" ? 
                              <input type="number"  className="px-4 border rounded self-auto text-center" onChange={(e)=>setMyOwnData({...myOwnData,year:e.target.value})} placeholder="data"/> 
                              : <input type="number"  className="px-4 border rounded self-auto text-center" value={apiCostModel? apiCostModel?.costYear:""} />}
                              </div>
                          </div>

              </div>
            </div>

            <section>
                <div className="container mx-auto grid md:grid-cols-3 gap-x-12">
                <div className="form-container mt-16">
              <div>
                <h3 className="text-gray-500 mb-5 font-black text-center" >
                 Over what Rol period (in number of years) do you want to recover stablishment costs?
                </h3>
              </div>
              <div>
                <input type="number" className="border w-full rounded py-2 text-center" onChange={(e)=>{setUser({...user,rolPeriodRecover:e.target.value})}} value={user.rolPeriodRecover?user.rolPeriodRecover:""}/>
              </div>
            </div>

            <div className="form-container items-center mt-16">
              <div>
                <h3 className="text-gray-500 mb-5 lg:mb-11 font-black text-center">
                 How many business units will be developing APIs this years?
                </h3>
              </div>
              <div>
              <input type="number" className="border w-full rounded py-2 text-center" onChange={(e)=>{setUser({...user,businessUnits:e.target.value})}} value={user.businessUnits?user.businessUnits:""}/>
              </div>
            </div>

            <div className="form-container  items-center mt-16">
              <div>
                <h3 className="text-gray-500 mb-5 font-black text-center">
               On average, how many bundled APIs will each business unit be creating this year
                </h3>
              </div>
              <div>
              <input type="number" className="border w-full rounded py-2 text-center" onChange={(e)=>{setUser({...user,bundledApis:e.target.value})}} value={user.bundledApis?user.bundledApis:""}/>
              </div>
            </div>
                </div>
            </section>

            

           

            

            <div className="mt-16">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                <Link href="/pricing-strategies">Continue</Link>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
