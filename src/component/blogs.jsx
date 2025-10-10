import '../output.css'
import '../input.css'

function Blogs() {
  

  return (
    <>
       <div>
        <section className="container">
            <div className="flex justify-between mt-12 mb-4 ">
                <h3 className="font-bold text-3xl">Our Blogs</h3>
                <div className="flex items-center mr-6">
                    <p className="text-lg">View</p>
                    <img src="/ images/icons/arrow-circle-right-black.svg" alt=""/>
                </div>
            </div>
            <span className="h-0.5 bg-[#B4B4B4] w-full  block"></span>
            <div className="flex justify-center items-center gap-6 mt-10">
                <div className="w-[396px] h-[336px] flex flex-col gap-1 ">
                    <img className="rounded-t-xl" src="/images/imageblogs.svg" alt=""/>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                        <img src="/images/icons/calendar.svg" alt=""/>
                        <p className="text-sm text-[#9E9E9E]">August , 8 , 2023</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="images/icons/timer.svg" alt=""/>
                        <p className="text-sm text-[#9E9E9E]">3 min read</p>
                    </div>
                    </div>
                    <h5 className="text-[20px] font-bold">Meta Platforms plans to release free</h5>
                    
                    <p>The parent company of Facebook, Meta Platforms, is introducing software to help developers </p>
                </div>
                <div className="flex justify-center flex-col  gap-4">
                    <div className=" w-[808px] h-40 flex items-center gap-5 shadow-md shadow-gray-500 rounded-lg">
                        
                        <img className="rounded-l-lg" src="/images/blog image.svg" alt=""/>
                        <div className="flex flex-col gap-2">
                        <h6 className="text-secendery text-lg">
                            8 Things You Probably Didn’t Know About Headphones
                        </h6>
                        <p className="text-sm text-[#717171]">Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost</p>
                        <div className=" flex justify-between items-center pr-5">
                            <div className="flex items-center">
                                <img src="/images/icons/calendar.svg" alt=""/>
                                <p className="text-[#9E9E9E]">March , 28 , 2023</p>
                            </div>
                                <img src="/images/icons/save-2.svg" alt=""/>

                        </div>      
                        </div>
                      
                    </div>

                    <div className=" w-[808px] h-40 flex items-center gap-5 shadow-md shadow-gray-500 rounded-lg">
                        
                        <img className="rounded-l-lg" src="/images/blog image-bitcoin.svg" alt=""/>
                        <div className="flex flex-col gap-2">
                        <h6 className=" text-lg">
                            Analyzing the August 17th Bitcoin Price Drop
                        </h6>
                        <p className="text-sm text-[#717171]">On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled</p>
                        <div className=" flex justify-between items-center pr-5">
                            <div className="flex items-center">
                                <img src="/images/icons/calendar.svg" alt=""/>
                                <p className="text-[#9E9E9E]">August , 17 , 2023</p>
                            </div>
                                
                        </div>      
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
export default Blogs
