

const Baner = ({title,discount,price,prevprice,image}) => (
    <div className= " bg-white w-46 h-60 rounded-sm pt-3">
                <div className="bg-[#FDDBC9] w-10  rounded-r-md ">
                    <p className="text-secendery">{discount}</p>
                </div>
                <div className="flex flex-col  items-center mt-[-20px] ">
                    <img src={image} alt=""/>
                </div>
                <p className=" pl-2">{title}</p>
                <div className="flex justify-between items-center pl-2 pr-2">
                     <del >
                        <p class="text-neutralgray">{prevprice}</p>
                        </del>
                    <p>
                       {price}
                    </p>
                </div>
            </div>
    
  )

export default Baner
