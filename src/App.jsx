
import './App.css'
import Header from './component/header.jsx'
import HeaderContent from './component/headercontent.jsx'
import Category from './component/category.jsx'
import Baner from './component/baner.jsx'
import CardsModel1 from './component/cardsmodel1.jsx'
import CardsModel2 from './component/cardsmodel2.jsx'
import Brands from './component/brands.jsx'
import Poster from './component/poster.jsx'
import Blogs from './component/blogs.jsx'
import Footer from './component/footer.jsx'
import categorydata from'./data.js'
//import baneritems from'./data.js'




let baneritems=[
    {title:'Logitech G502 Gaming Mouse',discount:'-50%',price:'$19.00',prevprice:'$38.00',image:'/images/mouse.svg'},
    {title:'NPET K10 Wired Gaming Keyboard, LED Backlit',discount:'-30%',price:'$34.30',prevprice:'$49.00',image:'/images/keybord.svg'},
    {title:'Apple Watch Series 7 (GPS, 41MM)',discount:'-20%',price:'$231.20',prevprice:'$289.00',image:'/images/applewatch.svg'},
    {title:'Apple 2022 MacBook Air M2 ',discount:'-50%',price:'$712.66',prevprice:'$950.22',image:'/images/macbook2022.svg'}
]

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



function App() {
  

  return (
    <>
      <Header />
    <HeaderContent/>
    <section className="container flex justify-center items-center gap-7  ">
      {categorydata.map((item , index) => (
        <Category
        key={index}
        title={item.title}
        image={item.image}/>
      ))}
    </section>
      <div className="container mt-10">
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
      {baneritems.map((item,index)=>(
      <Baner
      
      key={index}
      title={item.title}
      image={item.image}
      price={item.price}
      prevprice={item.prevprice}
      
      discount={item.discount}
      />
    ))}

              
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
                
               
                
                
                 {carditems1.map((item,index)=>(
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
            {carditems2.map((item,index)=>(
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
    <Footer/> 
    </>
  )
}

export default App
