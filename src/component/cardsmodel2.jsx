

function CardsModel2({title,image,price,prvprice,discount,rate,staricon}) {
  

  return (
    <>
      
        
                
               <div className="w-72 h-[347px]  rounded-xl shadow-lg p-4 shadow-gray-400  flex flex-col gap-4  relative mt-8">
                    <div>

                                  <div className="bg-[#FDDBC9] w-10  rounded-r-md absolute left-0  ">
                                  <p className="text-secendery">{discount}</p>
                                  </div> 
                              
                             
                        </div>
                    <div className="flex items-center ">
                        
                        <img className="w-[217px] h-[161px]" src={image} alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="border-[0.5px] border-solid border-[#444444] w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <span className="w-52 h-[1px] bg-black  block jus"></span>

                    </div>
                    <p className="h-[53px]">{title}</p>
                    <div>
                        <div className="flex justify-between items-center ">
                            <div className="relative">
                                <del className="text-sm text-neutralgray absolute bottom-5">
                                    {prvprice}
                                </del>
                                <p>   
                                  {price}
                                </p>
                            </div>
                            
                            <div className="flex items-center " >
                                <img src={staricon} alt=""/>
                                <p>{rate}</p>

                            </div>
                            
                        
                        </div>
                        
                    </div>
                </div>
                
               
            
       
       
    
    </>
  )
}
export default CardsModel2
