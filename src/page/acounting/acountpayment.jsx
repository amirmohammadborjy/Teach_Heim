import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"

function AccountPay() {
  

  return (
    <>
        <Header/>
            <span className='block bg-gray-300 w-full h-0.5' ></span>
        <div className="container">
            <div className='flex items-center'>
                <p className="text-[#717171]">Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Payments & Instalment</p>
                
            </div>
         <div className="mt-10 flex gap-6">
            <Sidemenu/>
            <div className="mt-10">
            <h5 className="text-[20px]">Cards</h5>
            <p className="text-[#717171] mt-2">manage payment methods</p>
            <div className="flex items-center gap-3 mt-10">
            <div className='h-[72px] w-[392px] bg-[#F6F6F6] rounded-xl pt-6 pb-6 pr-4 pl-4 flex items-center justify-between'> 
                 <p className=' text-[#717171]'>Credit or Debit cards</p>
                <button className='cursor-pointer'>
              <img src="/images/icons/edit.svg" alt="" />
              </button>
             </div>
             <div className="flex items-center">
                <button>
                    <img src="/images/icons/american express.svg" alt="" />
                </button>
                <button>
                    <img src="/images/icons/master card.svg" alt="" />
                </button>
                <button>
                    <img src="/images/icons/visa.svg" alt="" />
                </button>
             </div>
            </div>

            <div className="flex items-center gap-3 mt-9">
            <div className='h-[72px] w-[392px] bg-[#F6F6F6] rounded-xl pt-6 pb-6 pr-4 pl-4 flex items-center justify-between'> 
                 <p className=' text-[#717171]'>Credit or Debit cards</p>
                <button className='cursor-pointer'>
              <img src="/images/icons/edit.svg" alt="" />
              </button>
             </div>
             <div className="flex items-center">
                <button>
                    <img src="/images/icons/paypal.svg" alt="" />
                </button>
                
             </div>
            </div>

            <div className="mt-9">
                <h5 className="text-[20px]"> Instalments</h5>
                <div className="flex items-center mt-4 gap-2">
                    <a className="text-primery500" href="./manage.jsx">Manage your instalment</a>
                    <button className="cursor-pointer">
                    <img src="/images/icons/arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>
            
         </div>
         </div>
         
        </div>
    </>
  )
}
export default AccountPay
