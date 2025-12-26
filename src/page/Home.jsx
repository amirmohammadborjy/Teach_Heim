
import '../App.css'
import Header from '../component/header.jsx'
import HeaderContent from '../component/headercontent.jsx'
import Category from '../component/category.jsx'
import BanerList from '../component/banerlist.jsx'
import Baner from '../component/baner.jsx'
import CardsModel1 from '../component/cardsmodel1.jsx'
import CardsModel2 from '../component/cardsmodel2.jsx'
import Brands from '../component/brands.jsx'
import Poster from '../component/poster.jsx'
import Advertisement from '../component/advertisement.jsx'
import Blogs from '../component/blogs.jsx'
import Footer from '../component/footer.jsx'
import categorydata from'../data.js'
import { useEffect, useState } from 'react'
import axios from 'axios';
//import baneritems from'./data.js'





let carditems1=[
  {title:"Iphone 14 promax 256 gig",image:"/images/itemlaptop.svg",price:"$930.90",rate:"4.5",staricon:"/images/icons/Star.svg",icon:"./images/icons/+.svg"},
  {title:"Blackmagic Design Pocket Cinema Camera 6K Pro",image:"/images/itemlaptop.svg",price:"$2535.00",rate:"4.8",staricon:"/images/icons/Star.svg",icon:""},
  {title:"SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",image:"/images/itemlaptop.svg",price:"$1018.00",rate:"4.7",staricon:"/images/icons/Star.svg",icon:"./images/icons/+.svg"},
  {title:"VR VisionTech X1",image:"/images/itemlaptop.svg",price:"$1,399.00",rate:"3.9",staricon:"/images/icons/Star.svg",icon:""},
]

let carditems2=[
  {title:"EchoX Pro H900",image:"/images/imageheadohone.svg",price:"$32.30",prvprice:"",discount:"",rate:"4.1",staricon:"/images/icons/Star.svg"},
  {title:"Play Station 4 Pro 1Tb",image:"/images/imageplaystion.svg",price:"$980.00",prvprice:"$1090.00",discount:"",rate:"4.4",staricon:"/images/icons/Star.svg"},
  {title:"Apple MacBook Air 15 w/ Touch ID (2023)",image:"/images/imagemacbook.svg",price:"$1883.05",prvprice:"",discount:"",rate:"4.5",staricon:"/images/icons/Star.svg"},
  {title:"Airpods pro2",image:"/images/imagepad.svg",price:"$274.04",prvprice:"$285.08",discount:"-10%",rate:"4.2",staricon:"/images/icons/Star.svg"},

]


function Home() {
  const [categorydata1,setCategorydata]=useState([]);
  
  useEffect(()=>{
    axios.get("http://سسlocalhoسسسst:8000/apسسسسi/category")
    .then(response=>{
      console.log(response.data)
      // setCategorydata(response.data)
    }).catch(error=>{
      console.log(error);
      setCategorydata(categorydata);
    });
  },[])

//   useEffect(() => {
//   axios.get('http://localhost:8000/api/category')
//     .then(response => {
//       console.log(response.data);
//       setCategorydata(response.data);
//     })
//     .catch(error => {
//       console.error("Axios error:", error.response ? error.response.data : error.message);
//     });
// }, []);

  

  const [cardrdata1,setCardrdata1]=useState([]);
  useEffect(()=>{
    axios.get("https:8000/api/banneritems").then(response=>{
      setCardrdata1(response.data);
    }).catch(error=>{
      setCardrdata1(carditems1);
      console.log(error);
      
    })
  },[])
  const [cardrdata2,setCardrdata2]=useState([]);
  useEffect(()=>{
    axios.get("https:8000/api/banneritems").then(response=>{
      setCardrdata2(response.data);
    }).catch(error=>{
      setCardrdata2(carditems2);
      console.log(error);
    })
  },[])
  return (
    <>
      <Header />
      <span className='block h-[1px] bg-[#AECDFB]'></span>
    <HeaderContent/>
    <section className="container flex justify-center items-center gap-7  ">
      {categorydata1.map((item , index) => (
        <Category
        key={index}
        title={item.title}
        image={item.image}/>
      ))}
    </section>
      <BanerList/>
      <section className="container">
            <div className="flex justify-between mt-12 mb-4 ">
                <h3 className="font-bold text-3xl">New Products</h3>
                <div className="flex items-center mr-6">
                    <p className="text-lg">View</p>
                    <img src="/images/icons/arrow-circle-right-black.svg" alt=""/>
                    
                </div>
            </div>
                <span className="h-0.5 bg-black w-full  block"/>
            <div className="flex justify-between items-center gap-5">
                
               
                
                
                 {cardrdata1.map((item,index)=>(
      <CardsModel1
        key={index}
        title={item.title}
        image={item.image}
        price={item.price}
        staricon={item.staricon}
        rate={item.rate}
        icon={item.icon}
      />
    ))}
                
                        
                    
                
            </div>
        </section>
   <Advertisement/>
       
        <section className="container">
            <div className="flex justify-between mt-12 mb-4 ">
                <h3 className="font-bold text-3xl">Best Sellers</h3>
                <div className="flex items-center mr-6">
                    <p className="text-lg">View</p>
                    <img src="/images/icons/arrow-circle-right-black.svg" alt=""/>
                    
                </div>
            </div>
                <span className="h-0.5 bg-black w-full  block"></span>
            <div className="flex justify-between items-center gap-5">
            {cardrdata2.map((item,index)=>(
              <CardsModel2
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
              staricon={item.staricon}
              rate={item.rate}
              prvprice={item.prvprice}
              />
            ))}
           
            </div>
            
        </section>
    
    <Brands/>
    <Poster/>
    <Blogs/>
    <div className='flex justify-center gap-24'>
      <div className="flex items-center gap-4">
        <img src="images/icons/iconmanitor.svg" alt="" />
        <p>Latest and Greatest Tech</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="images/icons/gurd.svg" alt="" />
        <p>Guarantee</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="images/icons/delivery.svg" alt="" />
        <p>Free Shipping over 1000$</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="images/icons/time.svg" alt="" />
        <p>24/7 Support</p>
      </div>
    </div>
    <Footer/> 
    </>
  )
}

export default Home
