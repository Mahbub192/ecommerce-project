import { useState } from "react";;
import Banner from "./Banner/banner";
import Navbar from "./Shared/navbar";
import Header from "./Shared/header";
import Equipment from "./Equipment/Equipment";
import Add from "./Add/add";
import OfferCard from "./Products/OfferCard";



const index = () => {
  return (
    <div className="bg-[#EDF2FD]">
    <Header/>
    <Navbar/>
    <Banner/>
    <Equipment/>
    <Add></Add>
    <OfferCard></OfferCard>
    
    </div>
  );
};

export default index;