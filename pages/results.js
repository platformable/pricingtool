import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Results() {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);
  const [headRevenue, setHeadRevenue] = useState(null);
  const [tailRevenue, setTailRevenue] = useState(null);
  const [head, setHead] = useState({
    head1: null,
    head2: null,
    finalHead: null,
  });

  const [tail, setTail] = useState({
    tail1: null,
    tail2: null,
    finalTail: null,
  });

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
    setHeadRevenue(result);
    return result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

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

  const calculateAnnualBreakEvenHead = () => {
    let result = null;
    if (user.businessModel !== "Marketplace") {
      result = (breakevenRevenue * user.revenueHead) / 100;
    }

    if (user.businessModel === "Marketplace") {
      result = parseInt(breakevenRevenue) * 100(user.revenueHead);
    }

    return result.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateAnnualBreakEvenTail = () => {
    let result = null;
    if (user.businessModel !== "Marketplace") {
      result = (breakevenRevenue * user.revenueLongTail) / 100;
    }

    if (user.businessModel === "Marketplace") {
      result = parseInt(breakevenRevenue) * 100(user.revenueLongTail);
    }

    return result.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Head>
        <title>API monetization tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="businessObjectives" className="">
          <div className="container mx-auto my-5">
            <p className="text-xs mb-1">Step 06</p>
            <div className="grid md:grid-cols-2 items-center">
              <h3 className="font-bold text-3xl text-main-color">Results</h3>
              <div className="pdf flex flex-col self-end items-end">
                <img src="/pdf icon.png" alt="" width={30} height={40} />
                <a className="hover:cursor-pointer">find out more</a>
              </div>
            </div>
          </div>
        </section>

        <section id="businessObjectives-questions" className="mt-10">
          <div className="container mx-auto bg-white rounded-xl border p-5">
            <div className="bg-white">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                API product
              </span>
              <div className="dashes"></div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>API product name</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.apiProductName ? user.apiProductName : ""}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>API product description</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.apiDescription ? user.apiDescription : ""}
                />
              </div>
            </div>
            <div className="bg-white">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                Alignment with business strategy
              </span>
              <div className="dashes"></div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Primary objective</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.primaryObjective ? user.primaryObjective : ""}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Business Model</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.businessModel.name ? user.businessModel.name : ""}
                />
              </div>
            </div>
            <div className="bg-white">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                Industry norm pricing model
              </span>
              <div className="dashes"></div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Pricing Model</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.pricingModel.name ? user.pricingModel.name : ""}
                />
              </div>
            </div>
            <div className="bg-white">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                Costs analysis
              </span>
              <div className="dashes"></div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Cost Model</h6>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={user.apiCostModel.name ? user.apiCostModel.name : ""}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-5  pb-5">
              <div className="form-container grid grid-cols-3 items-center mt-1">
                <div>
                  <img
                    src="/How many business units will be developing APIs this years.png"
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
                    src="On average, how many bundled APIs will each business unit be creating this year-.png"
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
                    src="/Over what Rol period (in number of years) do you want to recover stablishment costs-.png"
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
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Initial establishment costs ($)</h6>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={
                    user.apiCostModel
                      ? `$${user.apiCostModel.cost?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6> Establishment costs for each Business unit ($)</h6>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={establishmentCostsForEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>
                  {" "}
                  Establishment costs for each API from each Business unit ($)
                </h6>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={establishmentCostsForEachAPIFromEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Establishment costs for each Business unit ($)</h6>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={establishmentCostsForEachAPIIncurred.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center mb-2 mt-10">
              <div className="">
                <h6>Annual operating costs ($)</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={
                    user.apiCostModel
                      ? `$${user.apiCostModel.costYear?.toLocaleString()}`
                      : ""
                  }
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Annual operating costs for each business unit ($)</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={annualOperatingCostForEachAPIBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>
                  Annual operating costs for each API from each business unit
                </h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={annualOperatingCostForEachAPIFromEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="bg-white my-5">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                Break even analysis
              </span>
              <div className="dashes"></div>
            </div>
            <div className="form-container price-setting-box gap-5 items-center my-2">
              <div className="">
                <h6>Break even revenue</h6>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="border w-full rounded py-1 px-2 text-main-color text-xs"
                  value={(
                    annualOperatingCostForEachAPIFromEachBusinessUnit +
                    establishmentCostsForEachAPIIncurred
                  ).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                />
              </div>
            </div>

            <div className="form-container price-setting-box-md gap-5 items-center mb-2 mt-10">
              <div className="">
                <h6 className="">
                  Annual break-even revenues requiered from each API for each
                  target market segments
                </h6>
              </div>
              <div className="flex  justify-center gap-10">
                <div className="form-container grid  grid-cols-head-tail gap-10  items-center">
                  <div>
                    <img
                      src="/What is the proportion of total revenues expected from HEAD-.png"
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
                      value={calculateAnnualBreakEvenHead()}
                    />
                  </div>
                </div>

                <div className=" grid  grid-cols-head-tail gap-10 justify-between items-center">
                  <div>
                    <Image
                      src="/What is the proportion of total revenues expected from LONG-TAIL-.png"
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
                      value={calculateAnnualBreakEvenTail()}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white my-5">
              <span className="italic text-xxs results-page-section-title bg-white  ">
                Proposed draft pricing model
              </span>
              <div className="dashes"></div>
            </div>

            <h3 className="font-black text-xl  text-main-color">
              Target Market
            </h3>
            <div className="form-container grid grid-cols-2 flex items-center ">
              <div></div>
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr 8fr",
                  alignItems: "center",
                }}
              >
                <img
                  src="/What is the proportion of total revenues expected from HEAD-.png"
                  width={60}
                  height={60}
                  alt=""
                />

                <h5 className="">Head</h5>
                <input
                  type="text"
                  className="border w-4/12 rounded py-1 px-2 text-main-color text-xs"
                  value={`${user.revenueHead.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} %`}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 flex items-center ">
              <div></div>
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr 8fr",
                  alignItems: "center",
                }}
              >
                <img
                  src="/What is the proportion of total revenues expected from HEAD-.png"
                  width={60}
                  height={60}
                  alt=""
                />

                <h5 className="">Tail</h5>
                <input
                  type="text"
                  className="border w-4/12 rounded py-1 px-2 text-main-color text-xs"
                  value={`${user.revenueLongTail.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })} %`}
                />
              </div>
            </div>

            <section>
              <div className="container mx-auto my-10">
                <div className="grid md:grid-cols-3 grid-cols-1">
                  <div className="target-market-segment text-right">
                    <h3 className="mr-10">HEAD</h3>
                  </div>

                  <div className="target-market-segment">
                    {user.pricingModel?.head?.map((model, index) => {
                      return (
                        <div className="grid grid-cols-2" key={index}>
                          <div className="headLeft">
                            <p>{model.name}:</p>
                          </div>
                          <div className="headLeft">
                            <p className="font-black">{model.value} $</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="headLeft">
                    <p className="font-black">{user.finalHead}$</p>
                  </div>
                </div>
              </div>
            </section>
         {user.tail.tail1 ? 
            <section>
              <div className="container mx-auto my-10">
                <div className="grid md:grid-cols-3 grid-cols-1">
                  <div className="target-market-segment text-right">
                    <h3 className="mr-10">TAIL</h3>
                  </div>
                  <div className="target-market-segment ">
                    {user.pricingModel?.tail?.map((model, index) => {
                      return (
                        <div className="grid grid-cols-2" key={index}>
                          <div className="headLeft">
                            <p>{model.name}:</p>
                          </div>
                          <div className="headLeft">
                            <p className="font-black">{model.value} $</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="target-market-segment ">
                    <div className="headLeft">
                      <p className="font-black">{user.finalTail} $</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            : ""}

          </div>
        </section>
      </Layout>
    </>
  );
}
