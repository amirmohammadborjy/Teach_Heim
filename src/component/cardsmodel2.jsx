

function CardsModel2({title,image,price,prvprice,discount,rate,staricon}) {
  

  return (
    <>
      
        
                
               <div className="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                    <div>
                            <script>
                                if({discount}) {
                                    <div className="bg-[#FDDBC9] w-10  rounded-r-md absolute left-0  ">
                                  <p className="text-secendery">{discount}</p>
                                  </div> 
                                }
                            </script>
                             
                        </div>
                    <div className="flex items-center ">
                        
                        <img src={image} alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="border-[0.1px] border-solid border-[#444444] w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <p className="">{title}</p>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
                            <div>
                                <del className="text-sm text-neutralgray">
                                    {prvprice}
                                </del>
                                <p>   
                                  {price}
                                </p>
                            </div>
                            
                        <div className="flex  items-center">
                            <p>{rate}</p>
                            <img src={staricon} alt=""/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
               
            
       
       
    
    </>
  )
}
export default CardsModel2
