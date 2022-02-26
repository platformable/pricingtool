import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
export default function PriceSettings() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const [headRevenue, setHeadRevenue] = useState(null);
  const [tailRevenue, setTailRevenue] = useState(null);

  const [head, setHead] = useState({
    head1: 0,
    head2: 0,
    finalHead: 0,
  });

  const [tail, setTail] = useState({
    tail1: 0,
    tail2: 0,
    finalTail: 0,
  });

  const {
    apiCostModel,
    bundledApis,
    pricingModel,
    businessUnits,
    rolPeriodRecover,
    revenueHead,
    revenueLongTail,
    businessModel
  } = user;

  const [primaryObjectiveList, setPrimeryObjectiveList] = useState(false);
  const [businessModelList, setBusinessModelList] = useState(false);

  /*   parseInt(apiCostModel.cost);
  parseInt(businessUnits);
  parseInt(bundledApis);
  parseInt(rolPeriodRecover); */

  const establishmentCostsForEachBusinessUnit =
    user.apiCostModel.cost / user.businessUnits;

  const establishmentCostsForEachAPIFromEachBusinessUnit =
    establishmentCostsForEachBusinessUnit / user.bundledApis;

  const establishmentCostsForEachAPIIncurred =
    establishmentCostsForEachAPIFromEachBusinessUnit / user.rolPeriodRecover;

  const annualOperatingCostForEachAPIBusinessUnit =
    user.apiCostModel.costYear / user.businessUnits;
    
  const annualOperatingCostForEachAPIFromEachBusinessUnit =
    annualOperatingCostForEachAPIBusinessUnit / user.bundledApis;

  const breakevenRevenue =
    annualOperatingCostForEachAPIFromEachBusinessUnit +
    establishmentCostsForEachAPIIncurred;
  

  const calculateHead = () => {
    const result1 =
      apiCostModel.cost / businessUnits / bundledApis / rolPeriodRecover;
    const result2 = apiCostModel.costYear / businessUnits / bundledApis;
    const result3 = (result1 + result2) * revenueHead;
    const result = result3 / 100;
    setHeadRevenue(result);

    return result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateTail = () => {
    const result1 =
      apiCostModel.cost / businessUnits / bundledApis / rolPeriodRecover;
    const result2 = apiCostModel.costYear / businessUnits / bundledApis;
    const result3 = (result1 + result2) * revenueLongTail;
    const result = result3 / 100;
    setTailRevenue(result);

    return result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleDynamicHead = (e, index) => {
    if (index === 0) {
      setHead({ ...head, head1: e.target.value });
      let newUser = Object.assign({}, user.pricingModel);
      newUser.head[0].value = e.target.value;
      setUser((prevState) => {
        return { ...prevState, pricingModel: newUser };
      });
      calculateFinalHead();
    }
    if (index === 1) {
      setHead({ ...head, head2: e.target.value });
      let newUser = Object.assign({}, user.pricingModel);
      newUser.head[1].value = e.target.value;
      setUser((prevState) => {
        return { ...prevState, pricingModel: newUser };
      });
      calculateFinalHead();
    }
  };

  const handleDynamicTail = (e, index) => {
    if (index === 0) {
      setTail({ ...tail, tail1: e.target.value });
      let newUser = Object.assign({}, user.pricingModel);
      newUser.tail[0].value = e.target.value;
      setUser((prevState) => {
        return { ...prevState, pricingModel: newUser };
      });
      calculateFinalTail();
    }
    if (index === 1) {
      setTail({ ...tail, tail2: e.target.value });
      let newUser = Object.assign({}, user.pricingModel);
      newUser.tail[1].value = e.target.value;
      setUser((prevState) => {
        return { ...prevState, pricingModel: newUser };
      });
      calculateFinalTail();
    }
  };

  const calculateFinalHead = () => {
    let result = 0;

    if (businessModel?.name !=="Marketplace" &&
      pricingModel.title ===
        "Minimum number of transactions required per year" || businessModel?.name !=="Marketplace" &&
      pricingModel.title === "Minimum number of clicks required per year"
    ) {
      console.log(" if 0")
      result = headRevenue / parseInt(user.pricingModel.head[0].value);
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (businessModel?.name === "Marketplace" &&
      pricingModel.title ===
        "Minimum number of transactions required per year" 
    ) {


      result = breakevenRevenue / parseInt(user.pricingModel.head[0].value);
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (businessModel?.name === "Marketplace" &&
    pricingModel.title === "Minimum number of clicks required per year"
    ) {
   

      result = breakevenRevenue / parseInt(user.pricingModel.head[0].value);
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (businessModel?.name === "Marketplace" &&
      pricingModel.title === "Minimum transaction volume required per year ($)"
    ) {

      
      const result1 = (breakevenRevenue / parseInt(user.pricingModel.head[0].value))*100;
      const result2 = result1.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      });
      result = result2;
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (
      pricingModel.title === "Minimum transaction volume required per year ($)"
    ) {

      const result1 = headRevenue * 100;
      const result2 = result1 / parseInt(user.pricingModel.head[0].value);
      const result3 = result2.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      });
      result = result3;
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (
      pricingModel.title === "Minimum number of API consumers required per year"
    ) {
      console.log(" if 4")
      const result1 = headRevenue;
      const result2 =
        parseInt(user.pricingModel.head[0].value) *
        parseInt(user.pricingModel.head[1].value);
      result = result1 / result2;
      setUser({
        ...user,
        finalHead: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  };

  const calculateFinalTail = () => {
    let result = 0;
                                               //   Minimum number of transactions required per year

if(user.pricingModel.tail){
    if (
      pricingModel.title ===
        `Minimum number of transactions requiered per year` ||
      pricingModel.title === `Minimum number of clicks required per year`
    ) {
      result = tailRevenue / parseInt(user.pricingModel.tail[0].value);
      setUser({
        ...user,
        finalTail: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (
      pricingModel.title === "Minimum transaction volume required per year ($)"
    ) {
      const result1 = tailRevenue * 100;
      result = result1 / parseInt(user.pricingModel.tail[0].value);
      setUser({
        ...user,
        finalTail: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (
      pricingModel.title === "Minimum number of API consumers required per year"
    ) {
      const result1 = tailRevenue;
      const result2 =
        parseInt(user.pricingModel.tail[0].value) *
        parseInt(user.pricingModel.tail[1].value);
      result = result1 / result2;
      setUser({
        ...user,
        finalTail: result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
      return result.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }



  }
  };

  useEffect(() => {
    calculateHead();
    calculateTail();
    calculateFinalHead();
    calculateFinalTail();
    setUser({ ...user, head: head, tail: tail });
/*     console.log("userhead", breakevenRevenue/user.head.head1);
    console.log("user", user);
    console.log("breakevenRevenue: ",breakevenRevenue)
    console.log("BusinessModel", businessModel) */
    /*   if(pricingModel.tail){
      var x = document.getElementById("tail0").defaultValue=1;
    } */
    /*     console.log(user); */
  }, [
    head.head1,
    head.head2,
    tail.tail1,
    tail.tail2,
    user.finalHead,
    user.finalTail,
  ]);

  return (
    <>
      <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="price-settings" className="">
          <div className="container mx-auto my-5">
            <p className="text-xs mb-1">Step 05</p>
            <div className="grid md:grid-cols-2 items-center">
              <h3 className="font-bold text-3xl text-main-color">
                Price Settings
              </h3>
              <div className="pdf flex flex-col self-end items-end">
                <img src="/pdf icon.png" alt="" width={30} height={40} />
                <a className="hover:cursor-pointer">find out more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="container mx-auto">
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Primary Objective</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.primaryObjective ? user.primaryObjective : ""}
                />
              </div>
            </div>

            <div
              className="form-container price-setting-box gap-5 items-center my-2 pb-5"
              id="price-settings-business-model"
            >
              <div className="">
                <h6>Business Model</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-6/12 rounded py-1 px-2 text-main-color text-xs"
                  value={user.businessModel ? user.businessModel.name : ""}
                />
              </div>
            </div>

            <div
              className="form-container price-setting-box gap-5 items-center my-3 pb-3"
              id="price-settings-business-model"
            >
              <div className="">
                <h6>Pricing Model</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-6/12 rounded py-1 px-2 text-main-color text-xs"
                  value={user.pricingModel ? user.pricingModel.name : ""}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <div
              className="form-container price-setting-box gap-5 items-center my-3 pb-3"
              id=""
            >
              <div className="">
                <h6>Cost Model</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-6/12 rounded py-1 px-2 text-main-color text-xs"
                  value={user.apiCostModel ? user.apiCostModel.name : ""}
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="form-container grid grid-cols-2 items-center ">
              <div>
                <h6 className="">Initial establishment costs ($)</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border rounded py-1 px-2 text-main-color text-xs"
                  value={
                    user.apiCostModel
                      ? `${user.apiCostModel.cost?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center ">
              <div>
                <h6 className="">Annual operating costs ($)</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border rounded py-1 px-2 text-main-color text-xs"
                  value={
                    user.apiCostModel
                      ? `${user.apiCostModel.costYear?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 mt-5 price-settings-border-bottom pb-5">
            <div className="form-container grid grid-cols-3 items-center mt-1">
              <div>
                <img
                  src="/businessUnits_icon.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm">Buniness Units</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.businessUnits}
                />
                {/*   <p className="xs-text my-2  p-2 ">{user.businessUnits}</p> */}
              </div>
            </div>

            <div className="form-container grid grid-cols-3 items-center mt-1">
              <div>
                <img
                  src="bundledApis_icon.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm">Bundled APIs</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.bundledApis}
                />
                {/*               <p className="xs-text my-2  p-2 ">{user.businessUnits}</p> */}
              </div>
            </div>

            <div className="form-container grid grid-cols-3 items-center mt-1">
              <div>
                <img
                  src="/rolPeriodRecover_icon.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h6 className="text-sm">Rol Period Recover</h6>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.rolPeriodRecover}
                />
                {/*         <p className="xs-text my-2  p-2 ">{user.rolPeriodRecover}</p> */}
              </div>
            </div>
          </div>
        </section>

        <section className="price-settings-target-market my-5">
          <div className="container mx-auto price-settings-border-bottom">
            <h6>Target Market</h6>

            <div className="price-settings-target-market-container flex justify-center">
              <div className="w-8/12 p-10  grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="flex gap-5 justify-between items-center">
                  <div>
                    <img
                      src="/What_is_the_proportion_of_total_revenues_expected_from_HEAD.png"
                      width={60}
                      height={60}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="">Head</h5>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border rounded py-1 px-2 text-main-color text-xs"
                      value={`${user.revenueHead.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}%`}
                    />
                  </div>
                </div>
                <div className="form-container grid grid-cols-3 items-center ">
                  <div>
                    <Image
                      src="/What_is_the_proportion_of_total_revenues_expected_from_LONG-TAIL.png"
                      width={60}
                      height={60}
                      lt=""
                    />
                  </div>
                  <div>
                    <h5 className="">Tail</h5>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border rounded py-1 px-2 text-main-color text-xs"
                      value={`${user.revenueLongTail.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}%`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto ">
            <h3 className="mt-10 text-main-color">
              Given your choices, the annual break-even revenues required from
              each API for each target market segment is calculated to be: (that
              is, (establishment costs + operating costs)*% share of each target
              market segment)
            </h3>

            <div className="price-settings-target-market-container flex justify-center">
              <div className="w-8/12 p-16  grid md:grid-cols-2 grid-cols-1 gap-10">
                <div className="form-container flex gap-5 justify-between items-center">
                  <div>
                    <img
                      src="/What_is_the_proportion_of_total_revenues_expected_from_HEAD.png"
                      width={60}
                      height={60}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="">Head</h5>
                  </div>
                  <div>
          
                    <input
                      type="text"
                      className="border rounded py-1 px-2 text-main-color text-xs"
                      value={`$${
                        headRevenue
                          ? headRevenue.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className=" flex gap-5 justify-between items-center">
                  <div>
                    <Image
                      src="/What_is_the_proportion_of_total_revenues_expected_from_LONG-TAIL.png"
                      width={60}
                      height={60}
                      lt=""
                    />
                  </div>
                  <div>
                    <h5 className="">Tail</h5>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border rounded py-1 px-2 text-main-color text-xs"
                      value={`$ ${
                        tailRevenue
                          ? tailRevenue.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto bg-white p-5 border rounded">
            <h3 className="">{pricingModel.title}</h3>

            <div className="my-5 grid grid-cols-3 gap-4">
              {pricingModel.head?.map((model, index) => {
                return (
                  <div className="" key={index}>
                    <p className="text-sm">{model.name}</p>
                    <input
                      type="range"
                      min="1"
                      max="600"
                      className={`slider `}
                      onChange={(e) => handleDynamicHead(e, index)}
                      /* onKeyUp={(e) => handleDynamicHead(e, index)} */
                    />
                    <p className="text-center my-3 h-8">
                      {head ? head[`head${index + 1}`] : head[`head${index + 1}`]}
                    </p>
                    {/*  <input type="number"  className="border my-2 text-center" onChange={(e)=>handleDynamicHead(e,index)} onKeyUp={(e)=>handleDynamicHead(e,index)}/>        */}
                  </div>
                );
              })}



              <div className="">
                <h3 className="opacity-0">Total</h3>
                <input
                  type="text"
                  className="border w-full  text-center rounded"
                  value={user.finalHead && user.finalHead}
                />
              </div>
            </div>

            {pricingModel?.tail ? (
              <>
                <div className="my-5 my-5 grid grid-cols-3 gap-4">
                  {pricingModel?.tail?.map((model, index) => {
                    return (
                      <>
                        <div className="" key={index}>
                          <p className="text-sm">{model.name}</p>
                          <input
                            type="range"
                            min="1"
                            max="600"
                            id={`tail${index}`}
                            className={`slider rounded`}
                            onChange={(e) => handleDynamicTail(e, index)}
                            onKeyUp={(e) => handleDynamicTail(e, index)}
                          />
                          <p className="text-center my-3 h-8">
                            {tail[`tail${index + 1}`]}
                          </p>
                          {/*  <input type="number"  className="border my-2 text-center" onChange={(e)=>handleDynamicHead(e,index)} onKeyUp={(e)=>handleDynamicHead(e,index)}/>        */}
                        </div>
                        {/*  <p>{model.name}</p>
                    <input type="number" className="border my-2 text-center" onChange={(e)=>handleDynamicTail(e,index)} onKeyUp={(e)=>handleDynamicTail(e,index)}/> */}
                      </>
                    );
                  })}
                  <div className="">
                    <h3 className="opacity-0">Total</h3>
                    <input
                      type="text"
                      className="border w-full  text-center rounded"
                      value={user.finalTail && user.finalTail}
                    />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </section>

 {/* s */}
      </Layout>
    </>
  );
}
