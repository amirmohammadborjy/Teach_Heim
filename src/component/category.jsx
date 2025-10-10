import '../output.css'
import '../input.css'

function Category() {
  

  return (
    <>
       <div className="">
        <section className="container flex justify-center items-center gap-7  ">
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imageiphone.svg" alt=""/>
                <p>Accessories</p>
            </div>
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imagecamera.svg" alt=""/>
                <p>Camera</p>
            </div>
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imagelaptop.svg" alt=""/>
                <p>Laptop</p>
            </div>
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imagephone.svg" alt=""/>
                <p>Smart Phone</p>
            </div>
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imagegaming.svg" alt=""/>
                <p>Gaming</p>
            </div>
            <div className="flex flex-col  items-center w-46 h-49 rounded-xl shadow-lg shadow-gray-400">
                <img src="/images/imagesaat.svg" alt=""/>
                <p>Smart Watch</p>
            </div>
        </section>
    </div>
    </>
  )
}
export default Category
