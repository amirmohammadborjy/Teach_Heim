import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Acount from './page/acounting/acounting.jsx'
import AccountPay from './page/acounting/acountpayment.jsx'
import Manage from './page/acounting/manage.jsx'
import Wishlist from './page/acounting/wishlist.jsx'
import Discount from './page/acounting/discount.jsx'
import Security1 from './page/acounting/security.jsx'
import Notification from './page/acounting/notification.jsx'
import AcOrder from './page/acounting/order.jsx'
import Home from './page/Home.jsx'
import AuthModal from './component/AuthModal.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <OrderStat/> */}
    {/* <AcOrder/> */}
    {/* <Notification/> */}
    {/* <Security1/> */}
    {/* <Discount/> */}
    {/* <Wishlist/> */}
    {/* <Manage/> */}
    {/* <AccountPay/> */}
    {/* <Acount/> */}
    
    <App/>
  </StrictMode>,
)
