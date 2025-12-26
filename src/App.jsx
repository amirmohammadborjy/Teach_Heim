import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./page/Home"
import Acount from "./page/acounting/acounting"
import AccountPay from "./page/acounting/acountpayment"
import AcOrder from "./page/acounting/order"
import Wishlist from "./page/acounting/wishlist"
import Discount from "./page/acounting/discount"
import Security1 from "./page/acounting/security"
import Notification from "./page/acounting/notification"
import Contactus from "./page/acounting/Contactus"
import OrderStatus from "./page/acounting/test"
import AuthModal from "./component/testcom"
function App() {
 
  return (
    <>
    
      <Router>
        <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/acounting/acount" element={<Acount/>}/>
        <Route path="/auth" element={<AuthModal/>}/>
        <Route path="/acounting/payment" element={<AccountPay/>}/>
        <Route path="/acounting/order" element={<AcOrder/>}/>
        <Route path="/acounting/order/orderstatus" element={<OrderStatus/>}/>
        <Route path="/acounting/wishlist" element={<Wishlist/>}/>
        <Route path="/acounting/discount" element={<Discount/>}/>
        <Route path="/acounting/security" element={<Security1/>}/>
        <Route path="/acounting/notification" element={<Notification/>}/>
        <Route path="/acounting/discount" element={<Discount/>}/>
        <Route path="/contactus" element={<Contactus/>}/>

      </Routes>
      </Router>
      
      
     
    </>
  )
}

export default App
