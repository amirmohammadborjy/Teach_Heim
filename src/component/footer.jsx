

function Footer() {
  

  return (
    <>
        <footer className="bg-[#253B80] pt-10 mt-10 ">
        <section>

            <div className=" container flex justify-between">
                <div className="text-white flex flex-col gap-2  ">
                    <a className="font-bold" href="">Company</a>
                    <a href="">about us</a>
                    <a href="">blog</a>
                    <a href="">returns</a>
                    <a href="">order status</a>

                    <div className="flex items-center gap-1 mt-[70px]">
                        <img src="/images/paypal.svg" alt=""/>
                        <img src="/images/american express.svg" alt=""/>
                        <img src="/images/visa.svg" alt=""/>
                        <img src="/images/master card.svg    " alt=""/>
                    </div>
                </div>
                <div className="text-white flex flex-col gap-2">
                    <a  className="font-bold">Info</a>
                    <a href="">How it works?</a>
                    <a href="">our promises</a>
                    <a href="">FAQ</a>
                </div>
                <div className="text-white flex flex-col gap-2">
                    <a href="">Contact us</a>
                    <div className="flex items-center gap-1">
                        <img src="/images/icons/location.svg" alt=""/>
                        <p className="text-neutrallightgray">123 Main Street, Anytown,USA</p>
    
                    </div><div className="flex items-center gap-1">
                        <img src="/images/icons/call-calling.svg" alt=""/>
                        <p className="text-neutrallightgray">+1 (555) 123-4567</p>
    
                    </div><div className="flex items-center gap-1">
                        <img src="/images/icons/sms-edit.svg" alt=""/>
                        <p className="text-neutrallightgray">TechHeimSupport@gmail.com</p>
    
                    </div>
                </div>
                <div className="flex gap-11">
                 
                    <div className="text-white flex flex-col gap-4">
                    <a href="">Sign up for News and updates</a>
                    <div className="border-2 border-white border-solid rounded-xl h-12 w-72 flex justify-between p-3">
                        <div className=" flex items-center ">
                            <img src="/images/icons/userwithe.svg" alt=""/>
                            <p>E-mail Address</p>
                        </div>
                        <img src="/images/icons/arrow-right-larg.svg " alt=""/>

                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/icons/Facebook.svg" alt=""/>
                        <img src="/images/icons/twitter.svg" alt=""/>
                        <img src="/images/icons/Instagram.svg" alt=""/>
                        <img src="/images/icons/Youtube.svg" alt=""/>
                    </div>
                </div>
                <div className="flex flex-col gap-28">
                    <div className="h-10 w-10 bg-[#AECDFB] rounded-[40px] flex justify-center items-center ">
                        <img src="/images/icons/message-question.svg" alt=""/>
                    </div>
                    <div className="h-10 w-10 bg-[#AECDFB] rounded-[40px] flex justify-center items-center ">
                        <img src="/mages/icons/arrow-circle-up.svg" alt=""/>
                    </div>
                </div>
                </div>
                
                


            </div>


            <div class="w-full bg-[#021736] h-14">
                <div class="p-5 flex justify-between">
                    <div class="flex items-center justify-center gap-2 ">
                        <img src="/images/icons/copyright.svg" alt=""/>
                        <p class="text-neutrallightgray">2023 Tech Heim. </p>
                    </div>
                    <div class="flex justify-center items-center gap-12 text-neutrallightgray ">
                        <a href="">cookie settings</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms and Conditions </a>
                        <a href="">Imprint</a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}
export default Footer
