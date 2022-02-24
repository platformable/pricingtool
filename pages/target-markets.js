import React, { useState, useContext,useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'
import Image from "next/image";
export default function TargetMarkets() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { primaryObjective,businessModel,revenueLongTail,revenueHead } = user;

  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList,setBusinessModelList]=useState(false)


  const checkTotaltarget = (head,tail)=>{

const sum = parseInt(head)+ parseInt(tail) || 0;
if (sum>100){
  return "not a valid value"
} else {
 return sum
}
}


useEffect(()=>{
  checkTotaltarget(revenueHead,revenueLongTail)

},[revenueHead,revenueLongTail])



  return (
    <>
     <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>


        
      <section id="businessObjectives" className="">
          <div className="container mx-auto my-5 md:px-0 px-5">
            <p className="text-xs mb-5">Step 03</p>
            <div className="grid md:grid-cols-2 items-center">
              <div className="">
              <h3 className="font-bold text-3xl text-main-color">
                Target Market
              </h3>
              <p className="bg-ob-dark text-white rounded-xl px-3 py-1 mt-2 inline-block text-xs">{businessModel.name}</p>
              <span className="italic block text-xs ml-2 mt-2">Business model category</span>
              </div>
              <div className="pdf flex flex-col self-end items-end">
                <img src="/pdf icon.png" alt="" width={30} height={40} />
                <a className="hover:cursor-pointer text-xs">find out more</a>
              </div>
            </div>
          </div>
        </section>


        <section className="container mx-auto my-10">
          <div className="cards-container grid md:grid-cols-3 grid-cols-1 gap-10">

            <div className="target-market-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
              <div className="flex justify-center mb-5"><img src="/What is the proportion of total revenues expected from HEAD-.png" width={60} height={60} alt="" /></div>
              <h3 className="my-5 h-10">What is the proportion of total revenues expected from HEAD?</h3>
              
              {businessModel === "Marketplace"?
              <input type="range" min="1" max="100"  className="slider" id="rolPeriodrecoverInput" 
              value={70}/>
              : 
              <input type="range" min="1" max="100"  className="slider" id="rolPeriodrecoverInput" onChange={(e)=>setUser({...user,revenueHead:e.target.value})} 
              value={user.revenueHead ? user.revenueHead: "" }/>
              }
            <p className="text-center my-3">{user.revenueHead ?`${user.revenueHead}%`:"0"}</p>
            </div>

            <div className="target-market-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
              <div className="flex justify-center mb-5"><Image src="/What is the proportion of total revenues expected from LONG-TAIL-.png" width={60} height={60} lt="" /></div>
              <h3 className="my-5 h-10">What is the proportion of total revenues expected from LONG-TAIL?</h3>
              {businessModel === "Marketplace"?
              <input type="range" min="1" max="100"  className="slider" id="rolPeriodrecoverInput" 
              value={70}/>
              : 
              <input type="range" min="1" max="100"  className="slider" id="rolPeriodrecoverInput" onChange={(e)=>setUser({...user,revenueLongTail:e.target.value})} 
              value={user.revenueLongTail ? user.revenueLongTail: "" }/>
              }
            <p className="text-center my-3">{user.revenueLongTail ?`${user.revenueLongTail}%`:"0"}</p>
            </div>

            <div className="target-market-card bg-gray-50 rounded-xl shadow p-5 grid justify-center content-center">
              <div className="flex justify-center mb-5"><img src="/Total consumer market.png" width={60} height={60} alt="" /></div>
              <h3 className="my-5 h-8">Total consumer market</h3>
           {/*    <input type="range" min="1" max="100" value="0" className="slider" id="rolPeriodrecoverInput" value="0" onChange={(e)=>setUser({...user,totalConsumerMarket:e.target.value})} min="1" max="100" 
              value={checkTotaltarget(revenueHead,revenueLongTail)} onChange={(e)=>setUser({...user,totalConsumerMarket:e.target.value})}/>
             
 */}
              <progress id="file"  max="100" value={checkTotaltarget(revenueHead,revenueLongTail)} onChange={(e)=>setUser({...user,totalConsumerMarket:e.target.value})}> </progress>
            <input type="text" className=" w-full rounded  bg-transparent py-2 text-center" value={`${checkTotaltarget(revenueHead,revenueLongTail)}%`} onChange={(e)=>setUser({...user,totalConsumerMarket:e.target.value})}/>
            
            </div>
          </div>

        </section>


       
      </Layout>
    </>
  );
}
