import Home from "../screens/home/home";
import ContactUs from "../screens/Contactus/ContactUs";
import { routers } from "../configuration/uionfig";
import Page1 from "../Template1/Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../screens/ProductDetails/View";
import CartPage from "../screens/CartPage";

export const Router = (props) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home language={props.language}/>}/>
            <Route path={routers.home} element={<Home language={props.language}/>}/>
            <Route path={routers.ContactUs} element={<ContactUs language={props.language}/>}/>
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/category/:catId?" element={<Page1 />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>


    </BrowserRouter>
)