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

 
console.log("user",user)
  
  

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
      <section id="businessObjectives" className="">
          <div className="container mx-auto my-5 md:px-0 px-5">
            <p className="text-xs mb-5">Step 04</p>
            <div className="grid md:grid-cols-2 items-center">
              <div className="">
              <h3 className="font-bold text-3xl text-main-color">
                Price Strategies
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

        
        <section id="pricing-strategy" className="mt-10">
            <section>
              <div className="container mx-auto md:px-0 px-5 pricing-strategy">
                <p className="my-2">Please selec a pricing stratgy</p>
                <div className="cards-container grid md:grid-cols-4 gap-4 my-5 grid-cols-1">
         
                {businessModel?.pricingModels?.map((value,index)=>{
           
                       return(
                      <>
                        <div className={`relative grid grid-cols-1 gap-4 p-4 mb-8 text-center justify-center border rounded-lg bg-white  h-100 ${checkSelectedCard(value) ? 'card-border shadow-xl': " shadow"}`}  onClick={()=>handleSelectedCard(value)} key={index} >
                        <div className="text-center grid justify-center">
                           {/* <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"  className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"  alt="" loading="lazy" width={60} height={60}/> */}
                           <img src={value.icon} /* className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" */ alt="" loading="lazy" /> 
                        </div>

                        <h6 className="font-black text-center">{value.name}</h6>
                        <p className="-mt-4 text-sm">{value.description}</p>
                    </div>
                    </>
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
