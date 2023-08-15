import Axios from 'axios';
import store from '../../store/index';
import { commonActions } from '../../store/commonStore'
const dispatch = store.dispatch
let commonStore = store.getState().commonStore
store.subscribe(function(){
    commonStore = store.getState().commonStore
})



// export const addToCart = (props, isStoreUpdated) => {
//     if(!isStoreUpdated && props !== null){
//         console.log(commonStore.cart)
//         // dispatch(commonActions.setCart({item:2}));
//         dispatch(commonActions.setCart());
//     }
// }

window.onload=()=>{

    
   
Axios.get("http://localhost:8045/cart/ByUserId",{
    headers:{
        userId:30
    }
}).then((succResp) => {

    var sr=succResp.data;var q1=[];
    if(sr.length>0){
    for(var q of sr) {
        q1.push({productId:q.product_id,quantity:q.qty});
    }
    dispatch(commonActions.setCart(q1));
}

})

}


      
//   Axios.get("http://localhost:8045/product/"+JSON.stringify(props.productId)).then((succResp) => {
//       // callback(succResp);
//       setPr(succResp.data);
//   }, (errorresp) => {
//       console.log(JSON.stringify(errorresp));
//   })








export const addToCart = (data) => {
    // console.log(commonStore.cart,'3333333333333');

    var uc;var cartA;
    var ec=JSON.parse(JSON.stringify(commonStore.cart));
    var f=0;
    if(ec.length>0){
    console.log(ec,'555555555555555');
    
    for(var a of ec ) {
        f=1;
        if(a.productId==data.productId) {
            f=0;break;
        }

    }}
    if(f==1||ec.length==0) {
        ec.push(data);
        uc=JSON.parse(JSON.stringify(ec));
        cartA={
            product_id:data.productId,
            user_id:30,
            qty:1
        }
       
        Axios.post("http://localhost:8045/cart/insertIntoCart",cartA).then((succResp) => {
            console.log(succResp.data);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })

    }
    else if(f==0) {
        uc=JSON.parse(JSON.stringify(ec));
    }

        // var myCart={...commonStore.cart[0],...data}
        // dispatch(commonActions.setCart([data]));
        console.log(uc,'3333333333333');
        dispatch(commonActions.setCart(uc));

}



export const reamoveFromCart = (productId,loc1) => {
    var ec=JSON.parse(JSON.stringify(commonStore.cart));
    var f=0;
    if(ec.length>0){
        var index=-1;
    for(var a of ec ) {
        f=1;
        index=index+1;
        if(a.productId==productId) {
            f=0;break;
        }

    }

    if(f==0) {

   
Axios.get("http://localhost:8045/cart/ByUserId",{
    headers:{
        userId:30
    }
}).then((succResp) => {
    
var sr=succResp.data;
if(sr.length>0){
for(var q of sr )
{
    if(q.product_id==productId){
        var cartId=q.cart_id;

        Axios.delete("http://localhost:8045/cart/"+cartId,{
            headers:{
                userId:30
            }
        }).then((succResp) => {
                       console.log(succResp);
                    }, (errorresp) => {
                        console.log(JSON.stringify(errorresp));
                    })
    }
}

}

}, (errorresp) => {
    console.log(JSON.stringify(errorresp));
})

    }
    ec.splice(index,1);
}
        console.log('222222222222222222222222222',ec);
        dispatch(commonActions.setCart(ec));
        window.location.href=loc1;



}



export const incrementCart = (productId) => {
    var ec=JSON.parse(JSON.stringify(commonStore.cart));
    var f=0;
    if(ec.length>0){
        var index=-1;
    for(var a of ec ) {
        f=1;
        index=index+1;
        if(a.productId==productId) {
            f=0;break;

        }

    }

    if(f==0) {
                        
                Axios.get("http://localhost:8045/cart/ByUserId",{
                    headers:{
                        userId:30
                    }
                }).then((succResp) => {
                    
                var sr=succResp.data;
                if(sr.length>0){
                for(var q of sr )
                {
                    if(q.product_id==productId){
                        var cartId=q.cart_id;
                        var q1=q.qty;
                        var q2=q1+1;

                        Axios.put("http://localhost:8045/cart/"+cartId,{
                            "qty":q2

                        }).then((succResp) => {
                                    console.log(succResp);
                                    }, (errorresp) => {
                                        console.log(JSON.stringify(errorresp));
                                    })

                }
                }

                }

                }, (errorresp) => {
                    console.log(JSON.stringify(errorresp));
                })

    }
   ec[index].quantity=ec[index].quantity+1;
}
        console.log('222222222222222222222222222',ec);
        dispatch(commonActions.setCart(ec));


}
 
export const placeOrder = () => {
    // var ec=JSON.parse(JSON.stringify(commonStore.cart));
    // var arr=[];
    // for(var p1 of ec) {
    //     arr.push({"product_id":p1.productId,"varients":0,"count":p1.quantity})
    // }
    // var brr=JSON.stringify(arr);
    // // [{"product_id":2451,"varients":0,"count":2}]
    // orderA=
    // {
        
    //     "user_id": 30,
    //     "products_and_varients": brr,
    //     "total_price": 0,
    //     "price_without_delivery": 0,
    //     "total_products_mrp": 0,
    //     "payment_method": "string",
    //     "paid_by_wallet": 0,
    //     "rem_price": 0,
    //     "avg_tax_per": 0,
    //     "total_tax_price": 0,
    //     "order_date": "2023-08-14T11:10:49.901Z",
    //     "delivery_date": "2023-08-14T11:10:49.901Z",
    //     "delivery_charge": 0,
    //     "time_slot": "string",
    //     "dboy_id": 0,
    //     "order_status": "string",
    //     "user_signature": "string",
    //     "cancelling_reason": "string",
    //     "coupon_id": 0,
    //     "coupon_discount": "string",
    //     "payment_status": "string",
    //     "cancel_by_store": 0,
    //     "dboy_incentive": 0,
    //     "updated_at": "string",
    //     "is_gift": true,
    //     "gift_message": "string",
    //     "isconfirmed": true,
    //     "order_confirm_timestamp": "string",
    //     "isPlaced": true,
    //     "order_placed_timestamp": "string",
    //     "isShipped": true,
    //     "order_shipped_timestamp": "string",
    //     "isOutForDelivery": true,
    //     "order_outForDelivery_timestamp": "string",
    //     "status": "string",
    //     "isDelivered": true,
    //     "order_delivered_timestamp": "string",
    //     "creditCardId": "string",
    //     "order_cancelled_timestamp": "string",
    //     "isCancelled": true
    //   }

}



export const decrementCart = (prId) => {
    var ec=JSON.parse(JSON.stringify(commonStore.cart));
    var uc=JSON.parse(JSON.stringify(commonStore.cart));
    var el;
    var f=0;
    if(ec.length>0){
        var index=-1;
    for(var a of ec ) {
        f=1;
        index=index+1;
        if(a.productId==prId) {
            f=0;break;

        }

    }

    if(f==0) {       
                Axios.get("http://localhost:8045/cart/ByUserId",{
                    headers:{
                        userId:30
                    }
                }).then((succResp) => {
                    
                var sr=succResp.data;
                if(sr.length>0){
                for(var q of sr )
                {
                    if(q.product_id==prId){
                        var cartId=q.cart_id;
                        var q1=q.qty;var q2;
                        if(q1>1) {
                            q2=q1-1;
                            el={
                                productId:prId,
                                quantity:q2
                            }
                            ec.splice(index,1,el);
                            Axios.put("http://localhost:8045/cart/"+cartId,{
                                "qty":q2
    
                            }).then((succResp) => {
                                        console.log(succResp);
                                        }, (errorresp) => {
                                            console.log(JSON.stringify(errorresp));
                                        })
                        }
                }
                }

                }

                }, (errorresp) => {
                    console.log(JSON.stringify(errorresp));
                })

    }
  
}
        console.log('222222222222222222222222222',uc);
       
        dispatch(commonActions.setCart(uc));

}
 


