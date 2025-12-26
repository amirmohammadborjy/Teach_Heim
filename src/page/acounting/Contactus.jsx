import Header from "../../component/header"
import Footer from "../../component/footer";
function Contactus() {

const locations = [
  {
    icon: "/images/icons/location-add.svg",
    title: "Office",
    dec: "123 Main Street, Anytown, USA",
  },
  {
    icon: "/images/icons/location-add.svg",
    title: "Email",
    dec: "info@techheim.com",
  },
  {
    icon: "/images/icons/location-add.svg",
    title: "Phone",
    dec: "+1 (555) 123-4567",
  },
];  

  return (
    <>
    <Header/>
    <span className="block w-full h-[1px] bg-[#0C68F4]"></span>
    
         <div className='container flex items-center'>
                <p>Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Contact us</p>
                
            </div>

    
    <div>
        <div className="mt-10">
            <div className="">
        <div className="flex justify-center gap-[168px]">
                     {locations.map((item, index) => (
                   <div key={index} className="flex flex-col w-[133px] items-center text-center">
                    <img className="w-12 h-12" src={item.icon}  />
                    <h5 className="text-xl">{item.title}</h5>
                    <p className="text-[#717171]">{item.dec}</p>
                    </div>
                ))}
                    

        </div>
        <div className="flex justify-center gap-32 mt-24">
            <div className="w-[496px] h-[203px] flex flex-col gap-6">
                <h4 className="text-2xl">Message us</h4>
               <p className="text-[#717171] h-[150px]">
                We're here to assist you every step of the way. Whether you have a question, need technical support, or simply want to share your feedback, our dedicated team is ready to listen and provide prompt assistance.
                </p>
            </div>

            <div className="w-[392px]">
                <div className=" flex flex-col justify-end gap-4">
                  <input type="text" name="" id=""  placeholder="* Your name" className="h-12 w-full border-2 border-[#B4B4B4] rounded-[8px] pl-3 "/>
                 <input type="text" name="" id=""  placeholder="* Email" className="h-12 w-full border-2 border-[#B4B4B4] rounded-[8px] pl-3 "/>
                 <input type="text" name="" id=""  placeholder="* Your name" className="h-[190px] w-full border-2 border-[#B4B4B4] rounded-[8px] pl-3 "/>
                    <div className="flex justify-end">
                     <button className=" bg-[#0C68F4] w-[184px] h-12 text-white text-center rounded-[8px] cursor-pointer ">
                    Submit
                  </button>
                  </div>
                </div>

               


                

            </div>

        </div>
        
            </div>
        </div>
    </div>

<Footer/>
       
    </>
  )
}
export default Contactus
