import React, { useState, useContext,useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'

export default function TargetMarkets() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { primaryObjective,businessModel,revenueLongTail,revenueHead } = user;

  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList,setBusinessModelList]=useState(false)


  const checkTotaltarget = (head,tail)=>{

const sum = parseInt(head)+ parseInt(tail);
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
          <div className="container mx-auto my-5">
            <button className="btn btn-border-main-bg-color  px-5 py-2 rounded  hover:cursor-pointer mt-5 shadow my-10" onClick={()=>router.back()}> Back </button>
            <h3 className="font-bold text-5xl text-main-color">
              Target markets
            </h3>
          </div>
        </section>
        <section id="businessObjectives-questions" className="mt-10">
          <div className="container mx-auto">
            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
                <h5 className="text-gray-500 text-xl">
                "What is the proportion of total revenues expected from HEAD?
                </h5>
              </div>
              <div>
                {businessModel === "Distribution"?
                <input type="number" className="border w-full rounded py-2 text-center" placeholder="" disabled value="70"/>
              : <input type="number" className="border w-full rounded py-2 text-center" placeholder="" 
              onChange={(e)=>setUser({...user,revenueHead:e.target.value})} min="10" max="100" 
              value={user.revenueHead ? user.revenueHead: "" }
              /> }
                
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
                <h5 className="text-gray-500 text-xl">
                "What is the proportion of total revenues expected from LONG-TAIL?
                </h5>
              </div>
              <div>
              
              {businessModel === "Distribution"?
                <input type="number" className="border w-full rounded py-2 text-center" placeholder="" disabled value="30"/>
              : <input type="number" className="border w-full rounded py-2 text-center" placeholder="" 
              onChange={(e)=>setUser({...user,revenueLongTail:e.target.value})} min="10" max="100"
              value={user.revenueLongTail ? user.revenueLongTail: "" }
              /> }
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center mt-2">
              <div>
                <h5 className="text-gray-500 text-xl font-bold">
               Total consumer market
                </h5>
              </div>
              <div>
              <input type="text" className="border w-full rounded  py-2 text-center" value={checkTotaltarget(revenueHead,revenueLongTail)} onChange={(e)=>setUser({...user,totalConsumerMarket:e.target.value})}/>
              </div>
            </div>

            



            <div className="mt-16">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                <Link href="/price-settings">Continue</Link>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
