import { useEffect, useState } from "react"
import Header from "../../component/header"
import Sidemenu from "../../component/sidemenu"

const wishitem=[
    {
      id: 1,
      title: "APPLE iPad Pro 11” M2",
      image: "/images/zfold.svg",
    },
    {
      id: 2,
      title: "Samsung Galaxy Z Flip 5",
      image: "/images/zfold.svg",
    },
    {
      id: 3,
      title: "Apple Watch Series 7",
      image: "/images/zfold.svg",
    },
    {
      id: 4,
      title: "Samsung Galaxy Z Fold 5",
      image: "/images/zfold.svg",
    },
    {
      id: 5,
      title: "Apple iPad Pro M2 2022",
      image: "/images/zfold.svg",
    },
    {
      id: 6,
      title: "SONY PLAYSTATION 5 PS5",
      image: "/images/zfold.svg",
    },
  ]
function Wishlist() {
  const [products, setProducts] = useState([])
 
    // گرفتن دیتا از API
  useEffect(() => {
    /*
    axios.get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(error => {
        setProducts(product);
        console.log(error);
      });
    */
    // فعلاً فقط از دیتای محلی استفاده می‌کنیم
     setProducts(wishitem);
  }, []);

  // تابع حذف
  const handleDelete = async (id) => {
    try {
      /*
      await axios.delete(`/api/products/${id}`);
      */
      // بعد از موفقیت، state رو آپدیت کن
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <>
       <Header/>
             <span className='block bg-gray-300 w-full h-0.5' ></span>

       <div className="container">
         <div className='flex items-center mb-10'>
                <p className="text-[#717171]">Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Payments & Instalment</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Instalment</p>
                
            </div>
        <div className="flex gap-6">
            <Sidemenu/>
         <div>
            <div className="mt-8">
                <h5 className="text-[20px]">Wish list</h5>
                <p className="text-[#717171]">See your favorites list here</p>
            </div>
            <div className="flex flex-wrap gap-6  w-[912px]">
                {products.map((item)=>{
                    return(
                        <div className="w-[288px] h-[347px] p-4  max-w-sm bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ">
                    
                    <img  src={item.image} alt="" />
                    <span className="block h-0.5 bg-[#428AF6]"></span>
                    <p  className="text-primery500 mt-6">{item.title}</p>
                    <div className="flex justify-between items-center mt-7">
                        <button className="flex justify-center items-center gap-2 cursor-pointer w-[150px] h-12 border-2 border-[#0C68F4] rounded-[8px] hover:shadow-md transition-shadow duration-300 ease-in-out">
                            <img src="images/icons/shopping-cart.svg" alt="" />
                            <p className="text-lg text-[#0C68F4]">Add to cart </p>

                        </button >
                        
                        <button onClick={() => handleDelete(item.id)}
              className="cursor-pointer flex items-center gap-2"
            >
                          <img  src="/images/icons/trash.svg" alt="" />
                        </button>
                    </div>
                </div>

                    )
                })}
                
                
            </div>
        </div>

        </div>
        

       </div>
    </>
  )
}
export default Wishlist






