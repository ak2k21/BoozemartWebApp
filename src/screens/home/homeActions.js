import store from '../../store/index'
import { commonActions } from '../../store/commonStore'
const dispatch = store.dispatch
let commonStore = store.getState().commonStore
store.subscribe(function(){
    commonStore = store.getState().commonStore
})


export const addUserInfo = (usr) => {
   uc=JSON.parse(JSON.stringify(commonStore.userInfo));
    dispatch(commonActions.setUserInfo(...uc,...usr));
}

