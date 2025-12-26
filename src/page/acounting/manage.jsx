
import { useEffect, useState } from "react";
import Header from "../../component/header"

const payments = [
    {
      id: 1,
      quantity: '×2',
      itemNumber: '#6897858',
      amount: 543.02,
      date1: '2023/08/20',
      date2: '$543.02',
      date3: '2023/08/15',
      status: 'Paid',
      statusColor: 'green',
      total: '$1,365.52',
    },
    {
      id: 2,
      quantity: '×2',
      itemNumber: '#6897858',
      amount: 433.00,
      date1: '2023/10/20',
      date2: '-',
      date3: '-',
      status: 'On schedule',
      statusColor: 'blue',
      total: '$843.50',
    },
    {
      id: 3,
      quantity: '×2',
      itemNumber: '#6897858',
      amount: 433.00,
      date1: '2023/10/20',
      date2: '-',
      date3: '-',
      status: 'On schedule',
      statusColor: 'blue',
      total: '$409.50',
    },
  ];


function Manage() {
  const [items, setItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    setItems(payments); 
  }, []);

  
  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  
  const selectedItems = items.filter(i => selectedIds.includes(i.id));
  const subtotalNumber = selectedItems.reduce((s, i) => s + Number(i.amount || 0), 0);
  const subtotal = subtotalNumber.toFixed(2);
  return (
    <>
      <Header/>
      <span className='block bg-gray-300 w-full h-0.5' ></span>
            
       <div className="container ">
        <div className='flex items-center'>
                <p className="text-[#717171]">Home</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Account</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-[#717171]">Payments & Instalment</p>
                <img src="../../../public/images/icons/arrow-down.svg" alt="" />
                <p className="text-primery500">Instalment</p>
                
            </div>
        <div className="h-16 bg-[#F9F9F9] rounded-lg flex items-center justify-between pr-5 pl-5 mt-8">
            <p className="ml-20">Description</p>
            <p>Due Amount </p>
            <p>Due Date</p>
            <p>Actual Amount </p>
            <p>Payment Date </p>
            <p>Status</p>
            <p>Total</p>
        </div>
        
             {items.map((item)=>{

                return (
            //   key:{item.id},
            <div className="h-20 border-1 flex  justify-between items-center border-[#EDEDED] pr-5 pl-5">
            <div className="flex items-center gap-3">
                
               <input type="checkbox" checked={selectedIds.includes(item.id)} onChange={()=>toggleSelect(item.id)} class="w-6 h-6  text-blue-600 bg-gray-100 rounded-3xl "/>
                <div className="flex items-center">
                <img src="/images/laptopmini.svg" alt="" />
                <p>{item.quantity}</p>
                </div>
                <p>{item.itemNumber}</p>
            </div>

                <p className="text-secendery">${item.amount}</p>

                <p className="w-[184px] flex justify-center">{item.date1}</p>

                <p>{item.date2}</p>
                <p className="w-[184px] flex justify-center">{item.date3}</p>
                <div className={`${item.status ==="Paid" ? "bg-[#D1F7E5] border-[#146C43] text-[#146C43]" :"bg-[#E4EEFE] border-[#0951BE] text-[#0951BE]"} pt-1 pb-1 pl-2 pr-2 border-1  rounded-[8px]`}>
                    <p>{item.status}</p>
                </div>
                <p>{item.total}</p>
            

        </div>

                )
           
          })}

        
         
        {/* <div className="h-20 border-1 flex  justify-between items-center border-[#EDEDED] pr-5 pl-5">
            <div className="flex items-center gap-3">
                
               <input type="checkbox" class="w-6 h-6  text-blue-600 bg-gray-100 rounded-3xl "/>
                <div className="flex items-center">
                <img src="/images/laptopmini.svg" alt="" />
                <p>x2</p>
                </div>
                <p>#8967856</p>
            </div>

                <p className="text-secendery">$543.02</p>

                <p className="w-[184px] flex justify-center">2023/08/20</p>

                <p>$543.02</p>
                <p className="w-[184px] flex justify-center">2023/08/15</p>
                <div className="pt-1 pb-1 pl-2 pr-2 border-1 border-[#146C43] bg-[#D1F7E5] rounded-[8px]">
                    <p>Paid</p>
                </div>
                <p>$1385.52</p>
            

        </div> */}
        <div className="flex items-center gap-4 mt-8">
       <div className="bg-[#F9F9F9] w-[310px] h-[48px] flex items-center justify-between p-6 rounded-[8px]">
        <h5>Subtotal</h5>
        <p>${subtotal}</p>
       
       </div>
       <button className="w-[168px] h-[48px] flex justify-center items-center bg-[#0C68F4] text-white rounded-[8px] cursor-pointer">
        <p>pay</p>
       </button>
        </div>
        </div> 
    </>
  )
}
export default Manage
