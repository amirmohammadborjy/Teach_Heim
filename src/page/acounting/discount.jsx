import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"



function Discount() {
  

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
                <p className="text-[#0C68F4] underline">Discounts</p>
                
            </div>
        <div className=" flex gap-6">
          
            <Sidemenu/>

            <div>
                <div className="mt-7">
                    <h5 className="text-[20px]">Discounts & Voucher</h5>
                    <p className="text-[#717171]">Add discount code to apply a discount in your purchase</p>
                </div>

                 <div className='h-[72px] w-[392px] mt-10 bg-[#F6F6F6] rounded-xl pt-6 pb-6 pr-4 pl-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <p className=' text-[#717171]'>label</p>

                </div>
                <button className='cursor-pointer'>
                <img src="/images/icons/eye.svg" alt="" />

                </button>
                </div>
                <div className="flex items-center">
                    <p className="text-[#717171]">Where can I find the discount code ?</p>
                    <img src="/images/icons/arrow-down.svg" alt="" />
                </div>

            </div>
        </div>
       </div>
    </>
  )
}
export default Discount
