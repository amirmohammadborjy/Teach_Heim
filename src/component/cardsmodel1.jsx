
function CardsModel1({title,image,price,rate,staricon,icon}) {
  

  return (
    <>
     <div className="w-72  rounded-xl shadow-lg shadow-gray-400 flex-col gap-4  relative mt-8 p-4">
                    <div className="flex items-center ">
                        <img src={image} alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-2 ">

                            <div className="w-3 h-3 bg-[#96B9D7]  rounded-md "></div>
                            <div className="w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            <div className="w-3 h-3 bg-[#96B9D7] rounded-md "></div>
                            <img  src={icon} alt=""/>
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <div className="h-[53px] mt-4" >
                    <p className="h-[53px]">{title}</p>

                    </div>
                    <div >
                        <div className="flex justify-between items-center ">
                            <p>   
                            {price}
                        </p>
                        <div className="flex items-center">
                            <p>{rate}</p>
                            <img src={staricon} alt=""/>
                        </div>
                        </div>
                        
                    </div>
                </div>
        
    </>
  )
}
export default CardsModel1
