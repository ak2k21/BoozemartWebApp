import './App.css';
import BillingAddress from './components/BillingAddress';
import Head from './components/Header/Header'
import OrderSummarySmall from './components/OrderSummarySmall';
import ReviewComp1 from './components/ReviewComponent1/ReviewComp1';
import Tile2 from './components/Tile2';
import {Router} from "./Route/Routers"
import CartPage from './screens/CartPage';
import ProductDetails from './screens/ProductDetails/View';
// import ProductDetails from './components/productdetails';
import ImageOverlay from './screens/Products/Product';
import SecureCheckoutPage from './screens/SecureCheckoutPage';


function App() {
  return (
    <div className="App">
      {/* <Tile2/> */}
      {/* <BillingAddress/> */}
      <Router/>
      {/* <OrderSummary/> */}
      {/* <ReviewComp1/> */}
      {/* <ProductDetails/> */}
       {/* <ProductDetails/> */}
       {/* <OrderSummarySmall/> */}
       {/* <ShoppingCart/> */}
       {/* <CartPage/> */}
       {/* <SecureCheckoutPage/> */}



      </div>
  );
}

export default App;

