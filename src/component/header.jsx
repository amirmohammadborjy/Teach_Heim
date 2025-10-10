import '../output.css'
import '../input.css'

function Header() {
  

  return (
    <>
       <section className="container  flex justify-between items-center  ">
            <img src="/images/icons/logo.svg" alt=""/>
            <nav className=" flex gap-12">
                <a>Home</a>
                <a>Products</a>
                <a>Blog</a>
                <a>FAQ</a>
                <a>Contact Us</a>
            </nav>
            <div className="flex gap-2 ">
                <img className="w-6 h-6"  src="/images/icons/search-normal.svg" alt=""/>
                <img className="w-6 h-6"  src="/images/icons/bag.svg" alt=""/>
                <img className="w-6 h-6"  src="/images/icons/user.svg" alt=""/>
            </div>
        </section>
    </>
  )
}
export default Header
