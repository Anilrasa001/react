import {createStore} from  'redux';

const accountStore={

custname:'',
balanceamt:0,
contactno:''
}


// Step 2: Create a reducer;( A reducer is just a function)
// SToring the initial state
export default function AccountDataComp(state=accountStore,action)
{

if(action.type===   "deposit")
{
   return {...state,balanceamt:state.balanceamt+action.payload};

}
if(action.type==="withdraw")
{
   return {...state,balanceamt:state.balanceamt-action.payload};

}
else

return state;
}

let store=createStore(AccountDataComp);
// console.log(storeobj.getState());

// storeobj.dispatch({type:"deposit",payload:1000});
// console.log(storeobj.getState());

// storeobj.dispatch({type:"withdraw",payload:500});
// console.log(storeobj.getState());



export default AccountDataComp;
export default store;


