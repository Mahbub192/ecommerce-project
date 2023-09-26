import { useState } from "react";;
import Banner from "./Banner/banner";
import Navbar from "./Shared/navbar";
import Header from "./Shared/header";
import Equipment from "./Equipment/Equipment";
import Add from "./Add/add";
import OfferCard from "./Products/OfferCard";
import Footer from "./Shared/Footer/footer";



const index = () => {
  return (
    <div >
    <Header/>
    <Navbar/>
    <Banner/>
    <Equipment/>
    <Add></Add>
    <OfferCard></OfferCard>
    <Footer></Footer>
    </div>
  );
};

export default index;