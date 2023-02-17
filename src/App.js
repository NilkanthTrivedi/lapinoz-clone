// import Programs from "./programs";
import "./App.css";
import Navbar from "./Components/01-Navbar/Navbar";
import OrderLocation from "./Components/02-OrderLocation/OrderLocation";
import OfferCard from "./Components/03-Offers/OfferCard";
import SellerCard from "./Components/04-Sellers/SellerCard";
import NwLaunch from "./Components/05-NewLaunch/NwLaunch";
import Comment from "./Components/06-Comment/Comment";
import Footer from "./Components/07-Footer/Footer";

function App() {
    return (
        <>
            <Navbar />

            <OrderLocation />

            <OfferCard />

            <SellerCard />

            <NwLaunch />

            <Comment />

            <Footer />
        </>
    );
}

export default App;
