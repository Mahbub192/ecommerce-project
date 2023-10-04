import Add from "./Add/add";
import Banner from "./Home/Banner/banner";
import Equipment from "./Home/Equipment/Equipment";
import OfferCard from "./Home/Products/OfferCard";
import Footer from "./Shared/Footer/footer";
import Header from "./Shared/header";
import Navbar from "./Shared/navbar";
;



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