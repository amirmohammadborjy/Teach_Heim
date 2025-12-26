

function Poster() {
  

  return (
    <>
      <div>
        <section className="container">
            <div className="bg-[#223949] h-[420px] relative rounded-xl  mb-10 flex justify-center">
                <img className="absolute right-0 z-0 rounded-r-xl" src="/images/icons/Ellipse 525.svg" alt=""/>
                <div className="flex justify-center gap-40 items-center">

                <div className="flex flex-col items-center gap-8 ml-10">
                    <h1 className="text-5xl font-bold text-white">SMART WATCH</h1>
                    <p className="text-2xl text-white">Various designs and brands</p>
                    <button  className="w-46 h-9 bg-[#FF6951] cursor-pointer rounded-xl text-center text-xl">
                        view
                    </button>
                </div>
                <img className="z-10" src="/images/Frame watch.svg" alt=""/>
            </div>
            </div>
            
        </section>
    </div>
    </>
  )
}
export default Poster
