import {style} from './style';
import {addToCart} from './homeActions';
import Head from '../../components/Header/Header';
import Products from '../Productlist/products';
import Footer from '../../components/footer';

function Home() {
  return (
    <div className="home" style={style.homeContainer}>
     <Head/>
     <div style={{paddingTop: "170px"}}>
        <Products/>
     </div>
     <Footer/>
    </div>
  );
}

export default Home;
