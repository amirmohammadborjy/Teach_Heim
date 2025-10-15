
function CardsModel1({title,image,price,rate,staricon,icon}) {
  

  return (
    <>
     <div className="w-72 h-[347px] rounded-xl shadow-lg shadow-gray-400  flex justify-center flex-col items-center gap-4 relative mt-8">
                    <div className="flex items-center ">
                        <img src={image} alt=""/>
                        <div className="flex flex-col items-center gap-2 absolute right-0  mr-4">

                            <div className="w-3 h-3 bg-[#96B9D7]  rounded-md "></div>
                            <div className="w-3 h-3 bg-[#F8F8EE] rounded-md "></div>
                            <div className="w-3 h-3 bg-[#96B9D7] rounded-md "></div>
                            <img  src={icon} alt=""/>
                        </div>
                    </div>
                    <span className="w-52 h-0.5 bg-black block "></span>
                    <div>
                    <p className="text-center">{title}</p>

                    </div>
                    <div>
                        <div className="flex justify-center gap-40 items-center ">
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
