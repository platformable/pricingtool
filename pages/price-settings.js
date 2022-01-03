import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default function PriceSettings() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const [headRevenue,setHeadRevenue]=useState(null)
  const [tailRevenue,setTailRevenue]=useState(null)
  const [head,setHead]=useState({
      head1:null,
      head2:null,
      finalHead:null
  })

  const [tail,setTail]=useState({
    tail1:null,
    tail2:null,
    finalTail:null
})

  const {
    apiProductName,
    primaryObjective,
    businessModel,
    apiCostModel,
    bundledApis,
    pricingModel,
    businessUnits,
    rolPeriodRecover,
    revenueHead,
    revenueLongTail,
  } = user;




  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);

/*   parseInt(apiCostModel.cost);
  parseInt(businessUnits);
  parseInt(bundledApis);
  parseInt(rolPeriodRecover); */

  const calculateHead = () => {
    const result1 =
    apiCostModel.cost / businessUnits / bundledApis / rolPeriodRecover;
    const result2 = apiCostModel.costYear / businessUnits / bundledApis;
    const result3 = (result1 + result2) * revenueHead;
    const result = result3 / 100;
    setHeadRevenue(result)
    return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  };

  const calculateTail = () => {
    const result1 =
      apiCostModel.cost / businessUnits / bundledApis / rolPeriodRecover;
    const result2 = apiCostModel.costYear / businessUnits / bundledApis;
    const result3 = (result1 + result2) * revenueLongTail;
    const result = result3 / 100;
    setTailRevenue(result)
    return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  };

  

  const calculateFinalHead = ()=>{
 
    let result=0

    if(

        pricingModel.title==="Minimum number of transactions required per year" || 
        pricingModel.title==="Minimum number of clicks required per year"){

        result=headRevenue/parseInt(head.head1)
        return result.toLocaleString(undefined,{maximumFractionDigits:2})
    }

    if(
        pricingModel.title==="Minimum transactions volume required per year ($)"){
        const result1=headRevenue*100
        const result2=result1/head.head1
        console.log("2da ocion")
        return result=result2.toLocaleString(undefined,{maximumFractionDigits:2})
        
    }

    if(
        pricingModel.title==="Minimum number of API consumers required per year"){
 
        const result1=headRevenue

        const result2=head.head1*head.head2
     

       return result=(result1/result2).toLocaleString(undefined, {maximumFractionDigits: 2})
    }
  }

  const calculateFinalTail = ()=>{
 
    let result=0

    if(
        pricingModel.title===`Minimum number of transactions requiered per year` || 
        pricingModel.title===`Minimum number of clicks required per year`){

        result=tailRevenue/tail.tail1
        return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }

    if(
        pricingModel.title==="Minimum transactions volume required per year ($)"){

        const result1=tailRevenue*100
        result=result1/tail.tail1
        return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }

    if(
        pricingModel.title==="Minimum number of API consumers required per year"){

        const result1=tailRevenue
        const result2=tail.tail1*tail.tail2
        result=(result1/result2)

        return result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    }
  }

  const handleDynamicHead=(e,index)=>{
 
      if(index===0){
          setHead({...head,head1:e.target.value})
      }
      if(index===1){
        setHead({...head,head2:e.target.value})
    }
  }

  const handleDynamicTail=(e,index)=>{
  
    if(index===0){
        setTail({...tail,tail1:e.target.value})
    }
    if(index===1){
      setTail({...tail,tail2:e.target.value})
  }
}

  useEffect(() => {
    calculateHead();
    calculateTail();

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
            <button
              className="btn btn-border-main-bg-color  px-5 py-2 rounded  hover:cursor-pointer mt-5 shadow my-10"
              onClick={() => router.back()}
            >
              {" "}
              Back{" "}
            </button>
            <h3 className="font-bold text-5xl text-main-color">
              Price Settings
            </h3>
            <h3>monoonoono</h3>
  
            
          </div>
        </section>
        <section id="businessObjectives-questions" className="mt-10">
          <div className="container mx-auto">
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">Primary objective</h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.primaryObjective ? user.primaryObjective : ""}
                />
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">Business Model</h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.businessModel ? user.businessModel.name : ""}
                />
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">Pricing Model</h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.pricingModel ? user.pricingModel.name : ""}
                />
                {/* <p className="xs-text my-2 text-xs  bg-main-color-light p-2 ">{user.pricingModel.definition}</p>
              <p className="xs-text my-2 text-xs italic bg-ob-light p-2">{user.pricingModel.example}</p> */}
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">Cost Model</h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.apiCostModel ? user.apiCostModel.name : ""}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Initial establishment costs ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={
                    user.apiCostModel
                      ? `$${user.apiCostModel.cost?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Annual operating costs ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={
                    user.apiCostModel
                      ? `$${user.apiCostModel.costYear?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-1">
              <div>
                <h5 className="text-gray-500 text-xl">Buniness Units</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">{user.businessUnits}</p>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
                <h5 className="text-gray-500 text-xl">Bundled APIs</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">{user.bundledApis}</p>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
                <h5 className="text-gray-500 text-xl">Rol Period Recover</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">{user.rolPeriodRecover}</p>
              </div>
            </div>

            <h3 className="font-black text-xl mt-10 text-main-color">
              Target Market
            </h3>

            <div className="form-container grid grid-cols-2 items-center">
              <div>
                <h5 className="text-gray-500 text-xl">Head</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">{user.revenueHead.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center">
              <div>
                <h5 className="text-gray-500 text-xl">Tail</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">{user.revenueLongTail.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </div>
            </div>

            <section className="choices">
              <h3 className="font-black text-xl mt-10 text-main-color">
                Given your choices, the annual break-even revenues required
                from each API for each target market segment is calculated to
                be: (that is, (establishment costs + operating costs)*% share of
                each target market segment)
              </h3>
              <div className="form-container grid grid-cols-2 items-center">
                <div>
                  <h5 className="text-gray-500 text-xl">Head</h5>
                </div>
                <div>
                  <p className="xs-text my-2  p-2 ">${headRevenue?headRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}):""}</p>
                </div>
              </div>
              <div className="form-container grid grid-cols-2 items-center">
                <div>
                  <h5 className="text-gray-500 text-xl">Tail</h5>
                </div>
                <div>
                  <p className="xs-text my-2  p-2 ">${tailRevenue?tailRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}):""}</p>
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

        <section>
          <div className="container mx-auto bg-red-50 p-5">


    
            <h3 className="font-black text-right">{pricingModel.title}</h3>

            <div className="my-5 grid grid-cols-2 gap-4">
              {pricingModel.head?.map((model, index) => {
                return (
                  <>
                    <p>{model.name}</p>
                    
                   {/*  <input type="range" id="volume" name="volume" min="0" max="11"  onChange={(e)=>handleDynamicHead(e,index)}/> */}
                    <input type="number" className="border my-2 text-center" onChange={(e)=>handleDynamicHead(e,index)}/>
                  </>
                );
              })}
            </div>
           <div className="flex justify-between"> 
           <p>Total</p>
           <input type="text" className="border my-2 text-center" value={calculateFinalHead()}/>
           </div>
            <div className="my-5 my-5 grid grid-cols-2 gap-4">
              {pricingModel.tail?.map((model, index) => {
                return (
                  <>
                    <p>{model.name}</p>
                    <input type="number" className="border my-2 text-center" onChange={(e)=>handleDynamicTail(e,index)}/>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between"> 
           <p>Total</p>
           <input type="text" className="border my-2 text-center" value={calculateFinalTail()}/>
           </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
