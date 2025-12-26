
import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"
import EditFieldModal from '../../component/form';

function Security1() {
  

  return (
    <>
      <Header/>
      <span className='block bg-gray-300 w-full h-0.5' ></span>
            
      <div className="container">
        <div className=' flex items-center mb-8'>
                <p>Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p>Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Security & access</p>
                
            </div>
        <div className="flex gap-6">
            <Sidemenu/>
            <div>
                <div className="mt-10">
                    <h5 className="text-[20px]">Security settings</h5>
                    <p className="text-[#717171]">Change password and phone number</p>

                </div>

                <div className="flex items-center gap-6 mt-6 ">
                    <div className='h-[72px] w-[392px] bg-[#F6F6F6] rounded-xl pt-6 pb-6 pr-4 pl-4 flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                     <img src="/images/icons/key.svg" alt="" />
                      <p className=' text-[#717171]'>Password</p>

                     </div>
                     <button className='cursor-pointer'>
                     <img src="/images/icons/edit.svg" alt="" />

                     </button>
                      </div>
                      <div className='h-[72px] w-[392px] bg-[#F6F6F6] rounded-xl pt-6 pb-6 pr-4 pl-4 flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                            <img src="/images/icons/call.svg" alt="" />
                            <p className=' text-[#717171]'>Phone number</p>

                         </div>
                         <button className='cursor-pointer'>
                        <img src="/images/icons/edit.svg" alt="" />

                                    </button>
                     </div>
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}
export default Security1
