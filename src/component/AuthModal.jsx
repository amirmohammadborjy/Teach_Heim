import { useState } from "react";
import { HiKey, HiEye, HiEyeOff,HiChevronDown, HiOutlineMail, HiUser } from "react-icons/hi";

export default function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // درخواست به API
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.token) {
        setStatus("ورود موفق ✅");
        // ذخیره توکن و ری‌دایرکت
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        setStatus("خطا در ورود ❌");
      }
    } catch {
      setStatus("مشکل در اتصال به سرور ❌");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          confirm: e.target.confirm.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ثبت‌نام موفق ✅");
        setActiveTab("login");
      } else {
        setStatus("خطا در ثبت‌نام ❌");
      }
    } catch {
      setStatus("مشکل در اتصال به سرور ❌");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[580px] pl-20 pr-20 pt-10">
        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 ${activeTab === "login" ? "border-b-2 border-blue-500 text-blue-500"  : ""}`}
            onClick={() => setActiveTab("login")}
          >
            <p> Log in</p>
            
          </button>
          <button
            className={`flex-1 py-2 ${activeTab === "signup" ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            <p>Create Account</p>
          </button>
        </div>

        {/* Forms */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center">
            <h3 className="text-[32px]">Log in to Tech Heim</h3>

            </div>

            {/* <input name="email" type="email" placeholder="ایمیل" className="w-full border p-2 rounded" /> */}
            
            
       <div className="relative w-full ">
      {/* آیکون فلش سمت چپ */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <HiOutlineMail />
      </div>

      {/* فیلد ایمیل */}
      <input
        type="email"
        placeholder="E-mail"
        className="w-full pl-10 pr-4 py-2 border   rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     </div>


            <div className="relative w-full">
      {/* آیکون کلید سمت چپ */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <HiKey />
      </div>

      {/* فیلد رمز عبور */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* آیکون چشم سمت راست */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
      >
        {showPassword ? <HiEyeOff /> : <HiEye />}
      </button>
      
     </div>
            <div className="text-right pr-6 mt-3">
        <p className="text-[#0C68F4]">Forgot Password ?</p>
      </div>
      <div className="">
          <label className="flex items-center space-x-2 cursor-pointer select-none text-sm text-gray-700">
               <input type="checkbox" className="form-checkbox h-4 w- text-blue-600  border-gray-300 rounded-[24px] focus:ring-blue-500"/>
           <span>Keep me logged in </span>
         </label>
      </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-[8px]">Log In</button>
              <div className="flex justify-center items-center gap-2 ">
                  <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
                  <p className="text-[16px] text-[#2D2D2D]">Or Log In with</p>
                  <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
              </div>
              <div className="flex justify-between items-center cursor-pointer mt-6 ">
                <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px]  flex justify-center items-center gap-2">
                  <img src="images/icons/google.svg" alt="" />
                  <p className="text-[16px] text-[#0C68F4]">Google</p>
                </div>
                <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px]  flex justify-center items-center gap-2">
                  <img src="images/icons/_Facebook.svg" alt="" />
                  <p className="text-[16px] text-[#0C68F4]">Facebook</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 ">
                <p className="text-[16px] text-[#717171]">Don’t have an account ? </p>
                <p className="text-[16px] text-[#0C68F4]">sign up</p>
              </div>
          </form>
        )}

        {activeTab === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
           <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center">
            <h3 className="text-[32px]">Create your account</h3>

            </div>

            {/* <input name="email" type="email" placeholder="ایمیل" className="w-full border p-2 rounded" /> */}
      <div className="relative w-full ">
      {/* آیکون فلش سمت چپ */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <HiUser/>
      </div>

      {/* فیلد ایمیل */}
      <input
        type="text"
        placeholder="Full Name"
        className="w-full pl-10 pr-4 py-2 border   rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     </div>
            
       <div className="relative w-full ">
      {/* آیکون فلش سمت چپ */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <HiOutlineMail />
      </div>

      {/* فیلد ایمیل */}
      <input
        type="email"
        placeholder="E-mail"
        className="w-full pl-10 pr-4 py-2 border   rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     </div>


            <div className="relative w-full">
      {/* آیکون کلید سمت چپ */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <HiKey />
      </div>

      {/* فیلد رمز عبور */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* آیکون چشم سمت راست */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
      >
        {showPassword ? <HiEyeOff /> : <HiEye />}
      </button>
      
     </div>
            
      <div className="">
          <label className="flex items-center space-x-2 cursor-pointer select-none text-sm text-gray-700">
               <input type="checkbox" className="form-checkbox h-4 w- text-blue-600  border-gray-300 rounded-[24px] focus:ring-blue-500"/>
               <div>
               <span>I agree to all </span>
               <span className="underline text-[#0C68F4]">Terms & Conditions</span>
               </div>
         </label>
      </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-[8px]">Create Account</button>
              <div className="flex justify-center items-center gap-1 ">
                  <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
                  <p className=" text-[#2D2D2D]">Or Sign Up with</p>
                  <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
              </div>
              <div className="flex justify-between items-center cursor-pointer mt-6 ">
                <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px]  flex justify-center items-center gap-2">
                  <img src="images/icons/google.svg" alt="" />
                  <p className="text-[16px] text-[#0C68F4]">Google</p>
                </div>
                <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px]  flex justify-center items-center gap-2">
                  <img src="images/icons/_Facebook.svg" alt="" />
                  <p className="text-[16px] text-[#0C68F4]">Facebook</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 ">
                <p className="text-[16px] text-[#717171]">Already have an account ? </p>
                <p className="text-[16px] text-[#0C68F4]">sign in</p>
              </div>
           </form>

          </form>
        )}

        {/* Status Dialog */}
        {status && <div className="mt-4 text-center text-sm text-gray-700">{status}</div>}

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">✖</button>
      </div>
    </div>
  );
}













