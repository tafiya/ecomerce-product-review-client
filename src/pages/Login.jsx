import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../components/SocialLogin/SocialLogin";


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
  
    const from =location.state?.from?.pathname || "/";

   
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
       
       
        signIn(email,password)
        .then(result=>{
            const user =result.user;
            toast.success('Successfully login!')
           
          navigate(from,{replace: true});
        })
    }
    return (
        
              <div className="w-full mt-24 max-w-md p-8 space-y-3 rounded-xl border bg-white  shadow-xl shadow-[#b3e6e6]  font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#45c6c6]">Login</h1>
        {/* Input fields and the form started */}
        <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="email" className="block ">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-[#8ee4e4] focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block ">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-[#C1DCDC] focus:outline-none focus:ring  " />
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#95e2e2] text-black border-y-4 duration-500 overflow-hidden focus:border-[#a4e1e1] z-50 group">
                Log In
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-black">
                    Let&apos;s go
                </span>
                <span className="bg-[#51e6e6] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#51e6e6] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-[#51e6e6] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-[#51e6e6] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
        </form>
        <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-center my-3 space-x-4">
            <SocialLogin></SocialLogin>
       
  
        </div>
        <p className="text-sm text-center gap-2 mt-6 flex justify-center sm:px-6 ">
            Don&apos;t have an account?
            <Link to='/signup' className="underline font-bold text-base hover:text-[#49d3d3]">
                Sign up
            </Link>
        </p>
    </div>

       
      
    );
};

export default Login;