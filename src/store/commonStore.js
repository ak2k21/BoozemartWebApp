import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    // cart: [{productId:77,quantity:1}]
    cart: [],
    userInfo:{}
    
}
const commonSlice = createSlice({
    name: "common",
    initialState: initialState,
    reducers: {
        setCart: (state, action) => {
            // state.cart = {...state.cart, ...action.payload}
            state.cart=action.payload
        } ,
        setUserInfo: (state, action) => {
            state.userInfo=action.payload
        }
    }
})

export const commonActions = commonSlice.actions
export default commonSlice