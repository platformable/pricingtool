import React, { useState, useContext,useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head'


export default function PricingStrategies() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const { primaryObjective,pricingModel,businessModel } = user;
  const [selectedCard,setSelectedCard]=useState([])
  const [isCardSelected,setIsCardSelected]=useState(false)

  const [pricingModelList, setPricingModelList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);

 

  
  

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
    const check = selectedCard.filter(card=>card.name===item.name)
    if(check.length===0){
      return false
    }else {
      return true
    }
  }


  useEffect(()=>{
    checkSelectedCard()
  },[])
  

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
              className="btn btn-border-main-bg-color px-5 py-2 rounded  hover:cursor-pointer mt-5 shadow my-10"
              onClick={() => router.back()}
            >
              Back
            </button>
          
            <h3 className="font-bold text-5xl text-main-color">
              Pricing Strategies
            </h3>
            <p className="rounded-full bg-main-color text-white text-xs inline-block px-2 py-1">{businessModel.name}</p>
            <p className="my-5">Please select a pricing strategie</p>
          </div>
        </section>


        <section id="costStructure-questions" className="mt-10">
            <section>
              <div className="container mx-auto">
                <div className="cards-container grid md:grid-cols-4 gap-4">
                {businessModel?.pricingModels?.map((value,index)=>{
           
                       return(
                      
                        <div className={`relative grid grid-cols-1 gap-4 p-4 mb-8  border rounded-lg   ${checkSelectedCard(value) ? 'bg-purple-50 shadow-xl': "bg-white shadow"}`}  onClick={()=>handleSelectedCard(value)} key={index}>
                        <div className="relative flex gap-4">
                        
                            {/* <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy" /> */}
                            <div className="flex flex-col w-full">
                            {/* <div className=" flex   justify-end "><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></div> */}
                                <div className="flex flex-row justify-between">
                                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{value.name}</p>
                                    <a className="text-gray-500 text-lg" href="#"><i className="fa-solid fa-trash"></i></a>
                                </div>
                                {/* <p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p> */}
                            </div>
                        </div>
                        <p className="-mt-4 text-gray-500">{value.description}</p>
                    </div>
                   
                       )
                     })}

                </div>
              </div>
            </section>
            

            

           

            

            <div className="mt-16 container mx-auto">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                <Link href="/target-markets">Continue</Link>
              </button>
            </div>
   
        </section>
      </Layout>
    </>
  );
}
