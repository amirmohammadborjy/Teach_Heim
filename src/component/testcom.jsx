import { useState } from "react";
import { HiKey, HiEye, HiEyeOff, HiOutlineMail, HiUser } from "react-icons/hi";

// Success Dialog Component
function SuccessDialog({ message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center w-[400px]">
        <div className="text-green-500 text-4xl mb-4">✅</div>
        <h2 className="text-2xl font-bold mb-2">Well done</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}

// Unsuccess (Error) Dialog Component
function UnsuccessDialog({ message }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[420px]">
        <div className="text-red-500 text-4xl mb-3">✖</div>
        <h2 className="text-xl font-semibold mb-2 text-red-600">Oops</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
}

export default function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "GET",
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data)
    //   data.token
      if (data.token) {
        setStatus("ورود موفق ✅");
        localStorage.setItem("token", data.token);
        setShowSuccess(true);
        // بعد از نمایش موفقیت، مودال بسته و هدایت به /home
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
          window.location.href = "/home";
        }, 2000);
      } else {
        setStatus("خطا در ورود ❌");
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
    } catch {
        
      setStatus("مشکل در اتصال به سرور ❌");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
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
          name: e.target.name?.value || "",
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setStatus("ثبت‌نام موفق ✅");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
          window.location.href = "/home";
        }, 2000);
      } else {
        // اگر API پیام خطای مشخص فرستاد می‌تونیم از data.message استفاده کنیم
        setStatus(data.message || "خطا در ثبت‌نام ❌");
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      }
    } catch {
      setStatus("مشکل در اتصال به سرور ❌");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] h-[580px] pl-20 pr-20 pt-10 relative">
        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 ${
              activeTab === "login" ? "border-b-2 border-blue-500 text-blue-500" : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            <p>Log in</p>
          </button>
          <button
            className={`flex-1 py-2 ${
              activeTab === "signup" ? "border-b-2 border-blue-500 text-blue-500" : ""
            }`}
            onClick={() => setActiveTab("signup")}
          >
            <p>Create Account</p>
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center">
              <h3 className="text-[32px]">Log in to Tech Heim</h3>
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiOutlineMail />
              </div>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiKey />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            <div className="text-right pr-6 mt-3">
              <p className="text-[#0C68F4] cursor-pointer" onClick={() => {/* می‌تونی مسیر فراموشی رمز رو اینجا اضافه کنی */}}>Forgot Password ?</p>
            </div>

            <div>
              <label className="flex items-center space-x-2 cursor-pointer select-none text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded-[24px] focus:ring-blue-500"
                />
                <span>Keep me logged in</span>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-[8px]">
              Log In
            </button>

            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
              <p className="text-[16px] text-[#2D2D2D]">Or Log In with</p>
              <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
            </div>

            <div className="flex justify-between items-center cursor-pointer mt-6 ">
              <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px] flex justify-center items-center gap-2">
                <img src="images/icons/google.svg" alt="Google" />
                <p className="text-[16px] text-[#0C68F4]">Google</p>
              </div>
              <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px] flex justify-center items-center gap-2">
                <img src="images/icons/_Facebook.svg" alt="Facebook" />
                <p className="text-[16px] text-[#0C68F4]">Facebook</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <p className="text-[16px] text-[#717171]">Don’t have an account ?</p>
              <p className="text-[16px] text-[#0C68F4] cursor-pointer" onClick={() => setActiveTab("signup")}>sign up</p>
            </div>
          </form>
        )}

        {/* Signup Form */}
        {activeTab === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="text-center">
              <h3 className="text-[32px]">Create your account</h3>
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiUser />
              </div>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiOutlineMail />
              </div>
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiKey />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiKey />
              </div>
              <input
                name="confirm"
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 cursor-pointer select-none text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded-[24px] focus:ring-blue-500"
                />
                <div>
                  <span>I agree to all </span>
                  <span className="underline text-[#0C68F4]">Terms & Conditions</span>
                </div>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-[8px]">
              Create Account
            </button>

            <div className="flex justify-center items-center gap-1 mt-4">
              <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
              <p className="text-[#2D2D2D]">Or Sign Up with</p>
              <span className="block w-[159px] h-[1px] bg-[#B4B4B4]"></span>
            </div>

            <div className="flex justify-between items-center cursor-pointer mt-6 ">
              <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px] flex justify-center items-center gap-2">
                <img src="images/icons/google.svg" alt="Google" />
                <p className="text-[16px] text-[#0C68F4]">Google</p>
              </div>
              <div className="w-[208px] h-12 border-[#0C68F4] border-2 rounded-[8px] flex justify-center items-center gap-2">
                <img src="images/icons/_Facebook.svg" alt="Facebook" />
                <p className="text-[16px] text-[#0C68F4]">Facebook</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <p className="text-[16px] text-[#717171]">Already have an account ?</p>
              <p className="text-[16px] text-[#0C68F4] cursor-pointer" onClick={() => setActiveTab("login")}>sign in</p>
            </div>
          </form>
        )}

        {/* Status */}
        {status && <div className="mt-4 text-center text-sm text-gray-700">{status}</div>}

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">✖</button>
      </div>

      {/* Dialogs */}
      {showSuccess && <SuccessDialog message="Your account has been successfully created." />}
      {showError && <UnsuccessDialog message={status || "An error occurred. Please try again."} />}
    </div>
  );
}
