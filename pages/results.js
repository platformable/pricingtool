import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

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

  const breakevenRevenue = annualOperatingCostForEachAPIFromEachBusinessUnit+establishmentCostsForEachAPIIncurred



    const calculateAnnualBreakEvenHead= ()=>{
      let result=null
        if(user.businessModel !=="Marketplace"){
              result=(breakevenRevenue*user.revenueHead)/100
              
        }

        if(user.businessModel ==="Marketplace"){
          result=parseInt(breakevenRevenue)*100(user.revenueHead)
        }

        return result.toLocaleString(
          "en-US",
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        )
    }

    const calculateAnnualBreakEvenTail= ()=>{
      let result=null
        if(user.businessModel !=="Marketplace"){
              result=(breakevenRevenue*user.revenueLongTail)/100
              
        }

        if(user.businessModel ==="Marketplace"){
          result=parseInt(breakevenRevenue)*100(user.revenueLongTail)
        }

        return result.toLocaleString(
          "en-US",
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        )
    }

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
            <h3 className="font-bold text-5xl text-main-color">Results</h3>
          </div>
        </section>
        <section id="businessObjectives-questions" className="mt-10">
          <div className="container mx-auto">
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">API product name</h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.apiProductName ? user.apiProductName : ""}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  API product description
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={user.apiDescription ? user.apiDescription : ""}
                />
              </div>
            </div>
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
                <p className="xs-text my-2 text-xs  bg-main-color-light p-2 ">
                  {user.pricingModel.description}
                </p>
                {/* <p className="xs-text my-2 text-xs italic bg-ob-light p-2">{user.pricingModel.example}</p> */}
              </div>
            </div>

            <div className="py-10 bg-purple-50 my-10">
              <hr />
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
                  Establishment costs for each Business unit ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={establishmentCostsForEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Establishment costs for each API from each Business unit ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={establishmentCostsForEachAPIFromEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Establishment costs for each Business unit ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={establishmentCostsForEachAPIIncurred.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>

            <div className="py-10 bg-purple-50 my-10">
              <hr />
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

            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Annual operating costs for each business unit ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={annualOperatingCostForEachAPIBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>
            <div className="form-container grid grid-cols-2 items-center mt-5">
              <div>
                <h5 className="text-gray-500 text-xl">
                  Annual operating costs for each API from each business unit
                  ($)
                </h5>
              </div>
              <div>
                <input
                  type="text"
                  className="border w-full rounded p-2 text-main-color"
                  value={annualOperatingCostForEachAPIFromEachBusinessUnit.toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                />
              </div>
            </div>

            <div className="py-10 bg-purple-50 my-10">
              <div className="form-container grid grid-cols-2 items-center mt-5">
                <div>
                  <h5 className="text-gray-500 text-xl">Break even revenue</h5>
                </div>
                <div>
                  <input
                    type="text"
                    className="border w-full rounded p-2 text-main-color"
                    value={ (annualOperatingCostForEachAPIFromEachBusinessUnit +
                      establishmentCostsForEachAPIIncurred
                    ).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  />
                </div>
              </div>


              <div className="annual-break-even mt-10">
                <h3 className="font-black">Annual break-even revenues requiered from each API for each target market segments</h3>

                <div className="target-market-segment grid grid-cols-2">
                  <div className="target-market-segment-left">
                    <p>Head</p>
                    <p>Long tail</p>
                  </div>
                  <div className="target-market-segment-left flex flex-col items-end mr-10">
                    <p>{calculateAnnualBreakEvenHead()}</p>
                    <p>{calculateAnnualBreakEvenTail()}</p>
                  </div>
                </div>
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
                <p className="xs-text my-2  p-2 ">
                  {user.revenueHead.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  %
                </p>
              </div>
            </div>

            <div className="form-container grid grid-cols-2 items-center">
              <div>
                <h5 className="text-gray-500 text-xl">Tail</h5>
              </div>
              <div>
                <p className="xs-text my-2  p-2 ">
                  {user.revenueLongTail.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  %
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="target-market-segment">
                <h3>HEAD</h3>
              </div>

              <div className="target-market-segment">
                {user.pricingModel?.head?.map((model, index) => {
                  return (
                    <div className="grid grid-cols-2">
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

        <section>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="target-market-segment">
                <h3>TAIL</h3>
              </div>

              <div className="target-market-segment">
                {user.pricingModel?.tail?.map((model, index) => {
                  return (
                    <div className="grid grid-cols-2">
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

              <div className="target-market-segment">
                <div className="headLeft">
                  <p className="font-black">{user.finalTail} $</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="my-16 container mx-auto">
            <Link href="/cost-structure">
              <button className="btn btn-main-bg-color  px-5 py-2 rounded mr-1 hover:cursor-pointer mt-5 shadow">
                Continue
              </button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
