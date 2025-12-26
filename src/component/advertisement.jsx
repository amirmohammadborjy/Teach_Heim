


function Advertisement() {
  

  return (
    <>
       <div className="container flex justify-center items-center gap-6">
        <div className="w-[756px] h-[420px] bg-[#1FB6CF] rounded-[8px] pt-6 flex gap-7 ">
            <div className="flex-col gap-10">
              <div className="flex ml-12 text-2xl">
                <h4>Iphone </h4>
                <h4 className="text-white">15 Series</h4>
              </div>
                <img className="mt-16 ml-6" src="/images/image 187.svg" alt="" />
            </div>
            <div>
            
              <div className="flex flex-col items-center gap-4 mt-6 mr-3.5">
                <div className="flex items-center gap-4">
             <div className="w-[49px] h-[46px] rounded-lg flex items-center flex-col  border-black border-1 ">
             <h6 className="text-[16px]">8</h6>
             <p className="text-sm">Days</p>
            </div>
           <div className="w-[49px] h-[46px] rounded-lg flex items-center flex-col  border-black border-1 ">
             <h6 className="text-[16px]">8</h6>
             <p className="text-sm">Days</p>
            </div>
           <div className="w-[49px] h-[46px] rounded-lg flex items-center flex-col  border-black border-1 ">
             <h6 className="text-[16px]">8</h6>
             <p className="text-sm">Days</p>
            </div>
           <div className="w-[49px] h-[46px] rounded-lg flex items-center flex-col  border-black border-1 ">
             <h6 className="text-[16px]">8</h6>
             <p className="text-sm">Days</p>
            </div>

                </div>
             
              <div>
                <h5 className="text-xl">It feels good to be the first</h5>
                <p className="text-[#2D2D2D] w-60 text-[16px]">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</p>
              </div>
              <button className="w-[138px] h-12 bg-[#0C68F4] text-white rounded-lg cursor-pointer "> 
                Register Now
              </button>
               

            </div>
            
        </div>
        </div>
        <div className="w-[444px] h-[420px] bg-primery500 rounded-lg relative">
          <img className="absolute top-0 left-0 rounded-l-lg z-0" src="images/shape/Ellipse 446.svg" alt="" />
          <img  className="absolute bottom-0 z-0" src="images/shape/Ellipse 449.svg" alt="" />
          <img  className="absolute  left-43 top-43 z-10" src="images/ps53.svg" alt="" />
          <h4 className="text-[#FCC870] text-2xl text-center pt-8">Play Station 5</h4>
          <div className="absolute z-10  left-11 top-64">
            <h5 className="text-[#005690] text-xl">Digital Edition + 2TB</h5>
          </div>
          <button className="absolute z-10 left-[66px] top-[338px] w-[148px] h-[46px] rounded-lg cursor-pointer bg-[#0C68F4] text-lg text-white">
            Buy Now
          </button>


        </div>
        
       </div>
    </>
  )
}
export default Advertisement
