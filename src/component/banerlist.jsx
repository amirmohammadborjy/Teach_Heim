
import Baner from "./baner"
function BanerList() {
  

  return (
    <>
       <div className="container mt-10">
        <section className=" h-82 bg-primery500 rounded-xl flex justify-between items-center  relative overflow-hidden pr-5">
            <img className="absolute left-0" src="/images/random-shape-in-blue-png 2.svg" alt=""/>
            <div>
                <div className="flex flex-col items-center ml-14">
                    <div className="text-center">
                    <h4 className="text-white text-2xl font-bold w-48">Products On Sale</h4>
                     <p className=" text-white text-xl">Shop Now!</p>
                    </div>
               
                    <div className="flex items-center mt-24">
                    <p className="text-white">View all</p>
                    <img src="/images/icons/arrow-circle-right.svg" alt=""/>
                    </div>
                </div>
              

            </div>
            <Baner/>
     

              
            <div className="absolute bottom-1 right-4 ">
                <button className="cursor-pointer">
                    <img src="/images/icons/CarouselLeft.svg" alt=""/>
                </button>
                <button  className="cursor-pointer">
                    <img src="/images/icons/Carouselright.svg" alt=""/>
                </button>
            </div>
        </section>
    </div>
    </>
  )
}
export default BanerList