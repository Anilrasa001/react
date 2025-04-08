import React, { StrictMode } from 'react'
import { BrowserRouter,Router,Route,Link, Routes,Outlet,useParams,useLocation} from 'react-router-dom'

function RouteComponent() {
  return (
    <div>
        <h2>RouteComponent</h2>
        <BrowserRouter>
        <Dashboard/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/order/:orderid/:ordername" element={<Order/>}/>
            <Route path="/cart" element={<Cart/>}>
                <Route path="billitem" element={<BillItem/>}>BillItem</Route>
                <Route path="payment" element={< Payment/>}>Payment</Route>
            </Route>
            <Route path="/*" element={<Errorpage/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>

  )
}


export default RouteComponent

function Home(){
    return(
    <h1>Hoem Component</h1>
    )
}
function Order(){
    // let myorders=useParams();
    // console.log(myorders)
    // console.log(myorders.orderid)
    // console.log(myorders.ordername)


    // let {orderid,ordername}=useParams()
    // console.log(orderid)
    // console.log(ordername)
    let mylocation=useLocation();
    console.log("what is the location:"+mylocation)
    console.log("what is the location:"+mylocation.pathname)
    let myorders   
    return(

    <h1>order Component</h1>
    )
}
function Cart(){
    return(
    <>
    <h1>Cart Component</h1>
    <button><Link to="billitem">BillItem</Link></button>
    <button><Link to="payment">Payment</Link></button>
    <Outlet/>
    </>
    
    )
}
function Dashboard()
{
    return(
    <ul>
        <li> <Link to={"/"}>Home</Link></li>
        <li><Link to={"/order"}>Order</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
    </ul>
    )
}

function Errorpage(){
    return(
        <h1>This is  the error page baba</h1>
    )
}
function Payment()
{
    return(
        <h1>payment</h1>
    )
}
function BillItem()
{
    return(
        <h1>item bill</h1>
    )
}
