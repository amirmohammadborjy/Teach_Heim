import '../output.css'
import '../input.css'

function Brands() {
  

  return (
    <>
       <div>
        <section className="container">
            <div className="flex justify-between mt-12 mb-4 ">
                <h3 className="font-bold text-3xl">Top Brands</h3>
                <div className="flex items-center mr-6">
                    <p className="text-lg">View</p>
                    <img src="/images/icons/arrow-circle-right-black.svg" alt=""/>
                    
                </div>
            </div>
                <span className="h-0.5 bg-black w-full  block"></span>

                <div className="flex justify-between items-center pt-14 pb-14">
                    <img src="/images/icons/apple.svg" alt=""/>
                    <img src="/images/icons/sony.svg" alt=""/>
                    <img src="/images/icons/sumsung.svg" alt=""/>
                    <img src="/images/icons/canon.svg" alt=""/>
                    <img src="/images/icons/huawei-svgrepo-com 1.svg" alt=""/>
                    <img src="/images/icons/lenovo.svg" alt=""/>
                </div>
        </section>
    </div>
    </>
  )
}
export default Brands
