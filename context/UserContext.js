import react,{useState,createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children})=>{

    const [user,setUser]=useState({
        isloggedIn:false,
        name:"",
        email:"",
        apiProductName:"",
        apidescription:"",
        primaryObjective:"",
        businessModel:{},
        apiCostModel:{},
        rolPeriodRecover:"",
        businessUnits:"",
        bundledApis:"",
        pricingModel:{},
        revenueHead:"",
        revenueLongTail:"",
        initialEstablishmentCost:"",
        anualOperatingCost:"",
        totalConsumerMarket:""
    })

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
        )

}