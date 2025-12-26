import axios from "axios";
import { useEffect, useState } from "react";

let baneritems = [
  {title:'Logitech G502 Gaming Mouse',discount:'-50%',price:'$19.00',prevprice:'$38.00',image:'/images/mouse.svg'},
  {title:'NPET K10 Wired Gaming Keyboard, LED Backlit',discount:'-30%',price:'$34.30',prevprice:'$49.00',image:'/images/keybord.svg'},
  {title:'Apple Watch Series 7 (GPS, 41MM)',discount:'-20%',price:'$231.20',prevprice:'$289.00',image:'/images/applewatch.svg'},
  {title:'Apple 2022 MacBook Air M2 ',discount:'-50%',price:'$712.66',prevprice:'$950.22',image:'/images/macbook2022.svg'}
];

function Baner() {
  const [banerdata, setBanerdata] = useState([]);

  useEffect(() => {
    axios.get("https:8000/api/banneritems") // آدرس رو درست کن
      .then(response => {
        setBanerdata(response.data);
      })
      .catch(error => {
        setBanerdata(baneritems); // fallback
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {banerdata.map((item, index) => (
        <div key={index} className="bg-white w-[184px] h-[229px] rounded-sm relative">
          <div className="bg-[#FDDBC9] w-10 rounded-r-md absolute">
            <p className="text-secendery">{item.discount}</p>
          </div>
          <div className="mt-3">
            <img src={item.image} alt={item.title} />
          </div>
          <p className="pl-2">{item.title}</p>
          <div className="flex justify-between items-center pl-2 pr-2">
            <del>
              <p className="text-neutralgray">{item.prevprice}</p>
            </del>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Baner;
