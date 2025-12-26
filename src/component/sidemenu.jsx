import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { id: 1, label: "Personal Data", icon: "user-edit.svg", path: "/acounting/acount" },
  { id: 2, label: "Payment & Instalments", icon: "dollar-circle.svg", path: "/acounting/payment" },
  { id: 3, label: "Orders", icon: "bag.svg", path: "/acounting/order" },
  { id: 4, label: "Wish list", icon: "heart.svg", path: "/acounting/wishlist" },
  { id: 5, label: "Discounts", icon: "gift.svg", path: "/acounting/discount" },
  { id: 6, label: "Security & access", icon: "security-safe.svg", path: "/acounting/security" },
  { id: 7, label: "Notification", icon: "notification.svg", path: "/acounting/notification" },
  { id: 8, label: "Contact us", icon: "24-support.svg", path: "/contactus" },
  { id: 9, label: "Log out", icon: "logout.svg", path: "/" },
];

function Sidemenu() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section>
      <div className="w-56 h-[748px] bg-[#F6F6F6] rounded-2xl pt-2">
        <div className="flex items-center gap-4 p-2 cursor-pointer">
          <img src="images/icons/profile-circle.svg" alt="" />
          <h5>Jimmy smith</h5>
        </div>

        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={() => setActiveItem(item.id)}
            className={({ isActive }) =>`flex items-center gap-4 p-6 cursor-pointer rounded-md transition-colors relative ${
                isActive || activeItem === item.id
                  ? `text-blue-600` 
                  : "text-gray-800 hover:bg-gray-200"
                  
              }`
            }
          >

            {(activeItem === item.id) && (
              <span id="test" className=" absolute left-0 top-0 h-full w-0.5 bg-blue-600 rounded-r-md" />
            )}
            <img src={`/images/icons/${item.icon}`} alt="" />
            <p>{item.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Sidemenu;
