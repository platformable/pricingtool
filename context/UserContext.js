import react,{useState,createContext} from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children})=>{

    const [user,setUser]=useState({
        isloggedIn:false,
        name:"",
        email:"",
        apiProductName:"",
        apiDescription:"",
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
        totalConsumerMarket:"",
        finalHead:null,
        finalTail:null,
        head:{},
        tail:{},
        selectedPriceStrategy:"",
        selectedbusinessModel:"",
        errorMessage:false
    })

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
        )

}