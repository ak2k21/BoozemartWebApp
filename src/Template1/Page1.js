import React, { useState } from 'react';
import rw from './redwine.png'
import './Page1.css';
import TextDiv from './TextDiv';
import Axios from 'axios';
import CategoryItem from '../components/CategoryItem/categoryItem';
import Banner2 from '../components/Banner/Banner2';
import HorizontalScroll from 'react-scroll-horizontal'
import Categorys from './Categorys';
import ProductScroll from './ProductScroll';
import ProductItem from '../components/productTile/ProductItem';
import { useParams } from 'react-router-dom';

const Page1 = (props) => {
  const { catId } = useParams();

 var [cat1,setCat1]=useState([]);
 var apiCatPr='http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/product/category/18?items_per_page=111&page_number=1';
 
 function myfun1(el) {
return <div className='catItem'>
<CategoryItem category={el}/>
</div>
 }
 
 React.useEffect(() => {
        
  Axios.get('http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/findChildrenByCatId/18').then((succResp) => {
      setCat1(succResp.data);
  }, (errorresp) => {
      console.log(JSON.stringify(errorresp));
  })


}, []);
  return (
    <div className='container1' >
    <div className='imgContainer'>
      
        <img src={rw} className='img1'  />
                              <div className='textDiv'>
                              <div className='Category-name'>
                                RED WINE{catId}
                              </div>
                              <div className='bar'>

                              </div>
                              </div>
                              
        </div>
   <div className='catItemContainerDiv'>
    {cat1.map(myfun1)}
   </div>
  <div style={{border:"2px solid yellow"}} >
    <div style={{marginLeft:"100px",marginTop:"20px"}}> <TextDiv text='Deals'/></div>
   <div className='banners'>
   <div className='banner-1'>
   <Banner2 text='VIEW THE LATEST DEALS AND SAVE'/>
   </div>
   <div className='banner-2'>
   <Banner2 text='VIEW YOUR DEAL' />
   </div>
   <div className='banner-3'>
   <Banner2 text='VIEW YOUR DEAL' />
   </div>
   </div></div>

   
<div className='filterComp1'>
      <div className='textComp1'>
      <TextDiv text='Shop by Region' />
      {/* <TextDiv text='Shop by Region' style1={{ width: '100px', height: '50px' }} /> */}

      </div>
              <div className='catComp'>
              <Categorys mySliderSettings=
  {{
  slidesToShow: 4,
  slidesToScroll: 4

  }}
  />
              </div>
</div> 



<div className='filterComp1'>
      <div className='textComp1'>
      <TextDiv text='Shop by Price' />
      {/* <TextDiv text='Shop by Region' style1={{ width: '100px', height: '50px' }} /> */}

      </div>
              <div className='catComp'>
              <Categorys  mySliderSettings=
  {{
  slidesToShow: 4,
  slidesToScroll: 4

  }}  />
              </div>
</div> 
 

 
<div className='prComp1'>
      <div className='textComp1'>
      <TextDiv text='Limited-Time Specials' myWidth='400px' />
      {/* <TextDiv text='Shop by Region' style1={{ width: '100px', height: '50px' }} /> */}

      </div>
              <div className='prComp'>
                
                {/* <ProductScroll   mySliderSettings=
  {{
  slidesToShow: 2,
  slidesToScroll: 2

  }}  /> */}
 <ProductScroll api1="http://ec2-43-204-114-19.ap-south-1.compute.amazonaws.com:8045/product/category/18?items_per_page=111&page_number=1"  />

              
              </div>
</div> 
 
 
<div className='prComp1'>
      <div className='textComp1'>
      <TextDiv text='Highly Rated Red Wines' myWidth='400px' />
      {/* <TextDiv text='Shop by Region' style1={{ width: '100px', height: '50px' }} /> */}

      </div>
              <div className='prComp'>
              
              </div>
</div> 
 <div className='imgBannerContainer'>
<div className='imgBanner'>

</div>
 </div>
 <div className='prComp1'>
      <div className='textComp1'>
      <TextDiv text='4+ Star Customer Rated' myWidth='400px' />
      {/* <TextDiv text='Shop by Region' style1={{ width: '100px', height: '50px' }} /> */}

      </div>
              <div className='prComp'>
              
              </div>
</div> 


</div>

  );
};

export default Page1;
