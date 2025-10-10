import '../output.css'
import '../input.css'

function HeaderContent() {
  

  return (
    <>
        <section className="container flex justify-center items-center  ">
            <div>
                <h1 className="text-6xl font-bold text-primery">
                    Tech Heim
                </h1>
                <div className="flex gap-2 mt-10">
                    <p className="text-3xl text-primery ">"Join the </p>
                    <p className="text-3xl text-secendery">     digital revolution"</p>
                </div>
                <button className="w-72 h-14 bg-secendery text-white rounded-2xl mt-20 cursor-pointer">
                    Explore More
                </button>
            </div>
            <img src="/images/Frame 26086938.svg" alt=""/>
        </section>
    </>
  )
}
export default HeaderContent
