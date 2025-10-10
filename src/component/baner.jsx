import '../output.css'
import '../input.css'

function Baner() {
  

  return (
    <>
      <div className="mt-10">
        <section className="container h-80 bg-primery500 rounded-xl flex justify-center items-center gap-10 relative overflow-hidden">
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
            <div className= " bg-white w-46 h-60 rounded-sm pt-3">
                <div className="bg-[#FDDBC9] w-10  rounded-r-md ">
                    <p className="text-secendery">-50%</p>
                </div>
                <div className="flex flex-col  items-center mt-[-20px] ">
                    <img src="/images/mouse.svg" alt=""/>
                </div>
                <p className=" pl-2">Logitech G502 Gaming Mouse</p>
                <div className="flex justify-between items-center pl-2 pr-2">
                     <del >
                        <p class="text-neutralgray">$38.00</p>
                        </del>
                    <p>
                       $19.00
                    </p>
                </div>
            </div>
              <div className= " bg-white w-46 h-60 rounded-sm pt-3">
                <div className="bg-[#FDDBC9] w-10  rounded-r-md ">
                    <p className="text-secendery">-30%</p>
                </div>
                <div className="flex flex-col  items-center mt-[-20px] ">
                    <img src="/images/keybord.svg" alt=""/>
                </div>
                <p className=" pl-2">NPET K10 Wired Gaming Keyboard, LED Backlit</p>
                <div className="flex justify-between items-center pl-2 pr-2">
                     <del >
                        <p className="text-neutralgray">$49.00</p>
                        </del>
                    <p>
                       $34.30
                    </p>
                </div>
            </div>
              <div className= " bg-white w-56 h-60 rounded-sm pt-3">
                <div className="bg-[#FDDBC9] w-10  rounded-r-md ">
                    <p className="text-secendery">-20%</p>
                </div>
                <div className="flex flex-col  items-center mt-[-20px] ">
                    <img src="/images/applewatch.svg" alt=""/>
                </div>
                <p className=" pl-2">Apple Watch Series 7 (GPS, 41MM)</p>
                <div className="flex justify-between items-center pl-2 pr-2">
                     <del >
                        <p className="text-neutralgray">$289.00</p>
                        </del>
                    <p>
                       $231.20
                    </p>
                </div>
            </div>
              <div className= " bg-white w-56 h-60 rounded-sm pt-3">
                <div className="bg-[#FDDBC9] w-10  rounded-r-md ">
                    <p clclassNamess="text-secendery">-50%</p>
                </div>
                <div className="flex flex-col  items-center mt-[-20px] ">
                    <img src="/images/macbook2022.svg" alt=""/>
                </div>
                <p className=" pl-2">Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)</p>
                <div className="flex justify-between items-center pl-2 pr-2">
                     <del >
                        <p className="text-neutralgray">$950.22</p>
                        </del>
                    <p>
                       $712.66
                    </p>
                </div>
            </div>
              
            <div className="absolute bottom-0 right-0 ">
                <button>
                    <img src="/images/icons/CarouselLeft.svg" alt=""/>
                </button>
                <button>
                    <img src="/images/icons/Carouselright.svg" alt=""/>
                </button>
            </div>
        </section>
    </div>
    </>
  )
}
export default Baner
