import { Routes, Route } from "react-router-dom";

// Composants
import Header from "../Header";
import Footer from "../Footer";

// Pages
import Home from "../../pages/Home";
import CardItem from "../../pages/CardItem";
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import Shop from "../../pages/Shop";
import ShopCard from "../../pages/Shop/ShopCard";
import Contact from "../../pages/Contact";
import Cart from "../../pages/Cart";
import Error from "../../pages/Error";

import './app.css';

const App = () => (
    <div className='app'>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<CardItem />} />

            <Route path='/inscription' element={<SignUp />} />
            <Route path='/connexion' element={<SignIn />} />

            <Route path="/boutique" element={<Shop />} />
            <Route path="/boutique/produit" element={<ShopCard />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/panier" element={<Cart />} />

            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </div>
);

export default App;