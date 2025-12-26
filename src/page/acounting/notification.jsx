import { useState } from "react";
import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"
function Notification() {
   const [emailOn, setEmailOn] = useState(true);
  const [deliveredOn, setDeliveredOn] = useState(true);
  const [pushOn, setPushOn] = useState(true);
  const [availabilityOn, setAvailabilityOn] = useState(true);

  return (
    <>
      <Header/>
        <span className='block bg-gray-300 w-full h-0.5' ></span>
      <div className="container">
         <div className=' mb-10 flex items-center'>
                <p>Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p>Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Notification</p>
                
            </div>
        <div className="flex gap-8 ">
            <Sidemenu/>
            <div>
                <div className="mt-8">
                <h5 className="text-[20px]">Notification</h5>
                <p className="text-[#717171]">Manage your notification settings</p>
            </div>
            <div className="flex flex-wrap gap-6 w-[808px] mt-10">

                  <div className=" w-[392px] h-[104px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="images/icons/direct.svg" alt="" />
                        <h6>Emails</h6>
                    </div>
              <div
             onClick={() => setEmailOn(!emailOn)}
             className={`w-[70px] h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300
              ${emailOn ? "bg-blue-600" : "bg-gray-300"}`}
             >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
             ${emailOn ? "translate-x-10" : "translate-x-1"}`}
               />
             </div>

                </div>
                <div>
                    <p className="text-[#717171] h-[286px]">We write emails to let you know <br></br> what's important, like: new order, confirmations </p>
                </div>
            </div>
            <div className=" w-[392px] h-[104px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="images/icons/sms.svg" alt="" />
                        <h6>Push to your Device</h6>
                    </div>
            <div
            onClick={() => setDeliveredOn(!deliveredOn)}
             className={`w-[70px] h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300
              ${deliveredOn ? "bg-blue-600" : "bg-gray-300"}`}
             >
           <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${deliveredOn ? "translate-x-10" : "translate-x-1"}`}
               />
             </div>

                </div>
                <div>
                    <p className="text-[#717171] h-[286px]">Receive notifications about your order<br></br> status, promotions and other updates </p>
                </div>
            </div>
            <div className=" w-[392px] h-[104px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="images/icons/truck.svg" alt="" />
                        <h6>Order Delivered</h6>
                    </div>
            <div
            onClick={() => setPushOn(!pushOn)}
             className={`w-[70px] h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300
              ${pushOn ? "bg-blue-600" : "bg-gray-300"}`}
             >
           <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${pushOn ? "translate-x-10" : "translate-x-1"}`}
               />
             </div>

                </div>
                <div>
                    <p className="text-[#717171] h-[286px]">You will be noticed once the order is <br></br>delivered</p>
                </div>
            </div>
            <div className=" w-[392px] h-[104px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="images/icons/story.svg" alt="" />
                        <h6>Product's availibilty</h6>
                    </div>
            <div
            onClick={() => setAvailabilityOn(!availabilityOn)}
             className={`w-[70px] h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300
              ${availabilityOn ? "bg-blue-600" : "bg-gray-300"}`}
             >
           <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${availabilityOn ? "translate-x-10" : "translate-x-1"}`}
               />
             </div>

                </div>
                <div>
                    <p className="text-[#717171] h-[286px]">You will be noticed when product gets<br></br> available </p>
                </div>
            </div>

            </div>

            </div>
            
          
        </div>
      </div>
    </>
  )
}
export default Notification
