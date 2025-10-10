import '../output.css'
import '../input.css'

function CardsModel2() {
  

  return (
    <>
      <div>
        <section className="container">
            <div className="flex justify-between mt-12 mb-4 ">
                <h3 className="font-bold text-3xl">Best Sellers</h3>
                <div className="flex items-center mr-6">
                    <p className="text-lg">View</p>
                    <img src="/images/icons/arrow-circle-right-black.svg" alt=""/>
                    
                </div>
            </div>
                <span className="h-0.5 bg-black w-full  block"></span>
            <div className="flex justify-between items-center gap-5">
                
                <div className="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                    <div className="flex items-center ">
                        <img src="/images/imageheadohone.svg" alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="w-3 h-3 bg-black rounded-md "></div>
                            
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <p>EchoX Pro H900</p>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
                            <p>   
                            $32.30
                        </p>
                        <div className="flex items-center">
                            <img src="/images/icons/Star.svg" alt=""/>
                            <p className="text-primery500 font-bold">4.5</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div class="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                        <div>
                            <img className="/absolute left-6" src="images/icons/heart.svg" alt=""/>
                        </div>
                    <div className="flex items-center ">
                       
                        <img src="/images/imageplaystion.svg" alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="w-3 h-3 bg-[#51504C] rounded-md "></div>
                            <div className="w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            <div className="w-3 h-3 bg-[#96B9D7] rounded-md "></div>
                            <img  src="/images/icons/+.svg" alt=""/>
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <p className="text-primery500">Play Station 4 Pro 1Tb</p>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
                            <div>
                                <del className="text-[#717171] text-sm ">
                                    $1090.00
                                </del>
                                 <p>   
                            $980.00
                        </p>
                            </div>
                           
                        <div className="flex items-center">
                            <p>4.5</p>
                            <img src="/images/icons/Star.svg" alt=""/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                    <div className="flex items-center ">
                        <img src="/images/imagemacbook.svg" alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="w-3 h-3 bg-[#51504C] rounded-md "></div>
                            <div className="w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                        
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <p className="ml-3">Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple)</p>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
                            
                            <p>   
                            $1883.05
                        </p>
                        <div className="flex items-center gap-1">
                            <img src="/images/icons/Star.svg" alt=""/>
                            <p className="text-primery">4.5</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                    <div>
                            <div className="bg-[#FDDBC9] w-10  rounded-r-md absolute left-0  ">
                                  <p className="text-secendery">-10%</p>
                              </div>  
                        </div>
                    <div className="flex items-center ">
                        
                        <img src="/images/imagepad.svg" alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="border-[0.1px] border-solid border-[#444444] w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <p className="">Airpods pro2</p>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
                            <div>
                                <del className="text-sm text-neutralgray">
                                    $ 285.08
                                </del>
                                <p>   
                                  $930.90
                                </p>
                            </div>
                            
                        <div className="flex  items-center">
                            <p>4.5</p>
                            <img src="/images/icons/Star.svg" alt=""/>
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
export default CardsModel2
