import { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
  name: "",
  image: "",
  services:[],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomepage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "ADITYA TRIVEDI",
        image: "./images/homebanner.webp",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Frontend Developer",
        image: "./images/aboutBanner.webp",
      },
    });
  };

//TO GET API DATA..
  
const getServices= async(url)=>{
 try{
const res=await fetch(url);
const data=await res.json();

dispatch({
  type:"GET_SERVICES",
  payload:data,
})
 }
 catch(error)
 {
  console.log(error)
}
}

  //to call the API..



  useEffect(()=>{
   getServices(API);
  },)

  return (
    <AppContext.Provider value={{ ...state, updateHomepage, updateAboutPage }}>
      {" "}
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
