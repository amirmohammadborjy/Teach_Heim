 import Header from "../../component/header"
 import Sidemenu from "../../component/sidemenu"
 import { Navigate, NavLink } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
 const orders = [
  {
    code: '1050486',
    date: '2023/04/15',
    total: '543.02',
    recipient: 'Jimmy Smith',
    addres:'31,Albuquerque,New York',
    Paymenttype:'Net Banking',
    Transactionid:'2345678910',
    status: 0, // 0=Placed, 1=Processing, 2=On the way, 3=Delivered
    items: [
  {title:"Play Station 4 Pro 1Tb",image:"/images/imageplaystion.svg",price:"$980.00",prvprice:"$1090.00",discount:"",rate:"4.4",staricon:"/images/icons/Star.svg",color:"Black"},
  {title:"Apple MacBook Air 15 w/ Touch ID (2023)",image:"/images/imagemacbook.svg",price:"$1883.05",prvprice:"",discount:"",rate:"4.5",staricon:"/images/icons/Star.svg",color:"gray"},
  {title:"Airpods pro2",image:"/images/imagepad.svg",price:"$274.04",prvprice:"$285.08",discount:"-10%",rate:"4.2",staricon:"/images/icons/Star.svg",color:"white"},

    ],
  },
  {
    code: '1050486',
    date: '2023/04/15',
    total: '543.02',
    recipient: 'Jimmy Smith',
    status: 3, // 0=Placed, 1=Processing, 2=On the way, 3=Delivered
    items: [
      {title:"Iphone 14 promax 256 gig",image:"/images/itemlaptop.svg",price:"$930.90",rate:"4.5",staricon:"/images/icons/Star.svg",icon:"./images/icons/+.svg"},
      {title:"Blackmagic Design Pocket Cinema Camera 6K Pro",image:"/images/itemlaptop.svg",price:"$2535.00",rate:"4.8",staricon:"/images/icons/Star.svg",icon:""},
      {title:"SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",image:"/images/itemlaptop.svg",price:"$1018.00",rate:"4.7",staricon:"/images/icons/Star.svg",icon:"./images/icons/+.svg"}
    ],
  },
];
 function AcOrder() {
    const tabs = ['Current', 'Delivered', 'Canceled', 'Returned'];
    const navigate = useNavigate();
  return (
    <>
       <Header/>
       <span className='block h-[1px] bg-[#AECDFB]'></span>
       <div className="container">
        <div className='flex items-center mb-10'>
                <p className="text-[#717171]">Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#0C68F4] underline">Order</p>
                
            </div>
        <div className="flex  gap-6">
            <Sidemenu/>
            <div>
                <div className="mt-8">
                    <h5 className="text-xl">Order History</h5>
                    <p className="text-[#717171]">Track, return or purchase items</p>
                </div>
                <div className="max-w-4xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-between w-[543px]">
        {tabs.map((tab) => (
          <p
            key={tab}
          >
            {tab} <span>({tab === 'Current' ? orders.length : 0})</span>
          </p>
        ))}
      </div>

      {/* Content */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 ">
          <img src="images/icons/3d payment.svg" alt="" />
          <p className="text-lg font-medium text-gray-700">You have not placed any orders yet.</p>
        </div>
      ) : (
        <div className="p-4 ">
          {orders.map((order) => (
            <div key={order.code} >
                <div className="flex flex-col gap-6 mt-6">
                    <div className=" rounded-[4px] bg-[#F6F6F6] p-4 flex w-[880px]">
                  <div className="flex flex-col gap-6 items-center w-[170px] h-[65px]">
                    <p>Order</p>
                    <p>#{order.code}</p>
                 </div>
                 <div className="flex flex-col gap-6 items-center w-[170px] h-[65px]">
                    <p>Placed on</p>
                    <p>#{order.date}</p>
                  </div>
                  <div className="flex flex-col gap-6 items-center w-[170px] h-[65px]">
                    <p>Total</p>
                    <p>#{order.total}</p>
                  </div>
                 <div className="flex flex-col gap-6 items-center w-[170px] h-[65px]">
                    <p>Sent to</p>
                    <p>#{order.recipient}</p>
                    </div>
               
                  <button onClick={() =>
                navigate(`/acounting/order/orderstatus`, { state: { order } })
              }
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Status
            </button>
                

                    </div>

                    <div>
                          <div className="h-[120px] flex gap-5">
                       {order.items.map((img, i) => (
                               <img className="w-[104px]" key={i} src={img.image} alt="item"     />
                        ))}
                   </div>
                    </div>

                </div>
                

                
              
              {/* <div className="flex space-x-2">
                {order.items.map((img, i) => (
                  <img key={i} src={img} alt="item" className="w-12 h-12 object-cover rounded" />
                ))}
              </div> */}
              
            </div>
          ))}
        </div>
      )}
    </div>
            </div>
        </div>
       </div>
       
    </>
  )
}
export default AcOrder
