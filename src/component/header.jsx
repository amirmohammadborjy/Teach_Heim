import { NavLink } from "react-router-dom"

function Header() {
  

  return (
    <>
       <section className="container flex justify-between items-center  ">
            <img src="/images/icons/logo.svg" alt=""/>
            <nav className=" flex gap-12">
              <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600"
  }
>
  Home
</NavLink>
                
                <a>Products</a>
                <a>Blog</a>
                <a>FAQ</a>
               <NavLink
  to="/contactus"
  className={({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600"
  }
 >
  Contact Us
</NavLink>
                
            </nav>
            <div className="flex gap-4">
              <button className="cursor-pointer">
              <img className="w-6 h-6"  src="/images/icons/search-normal.svg" alt=""/>
              </button>
                 <button className="cursor-pointer">
              <img className="w-6 h-6"  src="/images/icons/bag.svg" alt=""/>
              </button>
               <NavLink to={"/acounting/acount"} className="cursor-pointer">
              <img className="w-6 h-6"  src="/images/icons/user.svg" alt=""/>
              </NavLink>
                
                
            </div>
        </section>
    </>
  )
}
export default Header
