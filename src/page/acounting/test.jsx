
import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"
import { useLocation } from "react-router-dom";
const steps = [ { label: "Order Placed", icon1: "/images/icons/bucet2.svg",icon2: "🛒" }, { label: "Processing", icon1: "/images/icons/steppercircle.png",icon2:"/images/icons/steppercircle.svg" }, { label: "On the way", icon1: "/images/icons/steppercircle.png",icon2:"/images/icons/steppercircle.svg" }, { label: "Delivered", icon1: "/images/icons/Delivered.svg",icon2: "/images/icons/Delivered.svg"  }, ];
function OrderStatus() {
 const location = useLocation(); 
 const order = location.state?.order;
 const value=(order.status*25)+25;
  return (
    <>
                                                                  
       <Header/>
       <span className='block h-[1px] bg-[#AECDFB]'></span>
        <div className="container">
           <div className='flex items-center mb-10'>
                <p className="text-[#717171]">Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Orders</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Order Status</p>
                
            </div>
          <div className=" flex gap-6">
            <Sidemenu/>
            <div>   

              <div>
                <h5 className="text-[20px]">Order Status</h5>
                <p className="text-[16px] text-[#717171]">Track your order</p>
              </div>
                <div className="w-[912px] h-[292px] bg-[#F9F9F9] p-3 rounded-[8px] mt-6">
                  <div className="flex justify-center">
                         <div className="felx flex-col justify-center items-center">
                     <div className="flex justify-center items-center gap-2">
                        <h4 className="text-2xl">{value}%</h4>
                        <h4 className="text-2xl">Completed</h4>
                    </div>
   <progress value={value} max="100"
         className="w-52 h-2 rounded-lg overflow-hidden
         [&::-webkit-progress-bar]:bg-[#FDDBC9]
         [&::-webkit-progress-value]:bg-orange-500
         [&::-moz-progress-bar]:bg-orange-500" >
   </progress>
                  </div>
                  </div>
                 
                   
                <div>
                  <div className="flex justify-center items-center gap-14 mt-9">
                    
        {steps.map((step, index) => (
          
          <div key={index}>
              
            <div className={`flex flex-col items-center ${ index <= order.status ? "text-blue-600 text-2xl " : "text-gray-400" }`} >
              
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ index <= order.status ? "bg-blue-100" : "bg-gray-100" }`} >
                <img 
            src={
              index <= order.status
                ? step.icon1
                : step.icon2
            }
            alt=""
          />
              </div>
              <span className="mt-2  font-semibold">{step.label}</span>
            </div>
            
          </div>
        ))}
        
      </div>

        <div className="mt-6">
          <p className="text-lg">
            Please wait, we are still processing your order.
          </p>
          <p className="text-[#505050] text-[16px] w-[482px] text-center mt-3">
            We will notify you for any changes in your order.
          </p>
        </div>
                </div>
                </div>  

                <div className="mt-10 w-[912px]">
                  
                     <div className="h-14 flex bg-[#F9F9F9]">
                      <p className="w-[416px] p-4">order code</p>
                      <p className="w-[416px] p-4">#{order.code}</p>
                     </div>

                     <div className="h-14 flex ">
                      <p className="w-[416px] p-4">Placed on  </p>
                      <p className="w-[416px] p-4">{order.date}</p>
                     </div>

                     <div className="h-14 flex bg-[#F9F9F9]">
                      <p className="w-[416px] p-4">Sent to</p>
                      <p className="w-[416px] p-4">{order.addres}</p>
                     </div>

                     <div className="h-14 flex ">
                      <p className="w-[416px] p-4">Payment type </p>
                      <p className="w-[416px] p-4">{order.Paymenttype}</p>
                     </div>

                     <div className="h-14 flex bg-[#F9F9F9]">
                      <p className="w-[416px] p-4">Transaction id</p>
                      <p className="w-[416px] p-4">{order.Transactionid}</p>
                     </div>

                     <div className="h-14 flex ">
                      <p className="w-[416px] p-4">Amount Paid</p>
                      <p className="w-[416px] p-4">${order.total}</p>
                     </div>
                  
                 </div> 

                 <div>
                    <div>
  {order.items.map((item, index) => (
    <div className="mt-2" >
      <div className="flex">
        <img className="w-[87px]" key={index} src={item.image} alt="" />
      <div>
        <p className="text-xs">{item.title}</p>
        <p className="text-[10px]">{item.color}</p>
        <p> </p>
      </div>
      </div>
       <p className="text-right text-xs text-[#2D2D2D]">{item.price}</p>   
      <span className="block w-full h-[1px] bg-[#CBCBCB]"></span>
    </div>
    
  ))}
</div>


                 </div>

            </div>
        </div>
        </div>
        

    </>
  )
}
export default OrderStatus
