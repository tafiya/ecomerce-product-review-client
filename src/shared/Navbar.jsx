import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import toast from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);

  const [isAdmin] = useAdmin();
  //const [cart] =useCart()
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast('logOut...!', {
        icon: '👏',
      });
    })
    .catch(error=>console.log(error));
  }
  const navOptions=<>
  <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/contact'>Contacts</Link></li>
  </>
    return (
      <div className=" flex justify-center">
                <div className="navbar bg-base-100 rounded-xl fixed z-10 max-w-[1248px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <h1 className="text-xl lg:mr-24">GREENMIND</h1>
    <div className="hidden lg:flex">
    <ul className="gap-4 menu-horizontal px-1">
      {navOptions}
    </ul>

    </div>
    
  </div>
  <div className="navbar-end">
        
            {
              user ?<>
              <div className=" ml-7 flex items-center gap-6 ">
              <img src={user.photoURL ? user.photoURL : <FaRegUserCircle />} alt="" className=" border rounded-full sm:h-12 h-8 w-8 sm:w-12" />
              <div className="dropdown ml-2  dropdown-end text-black">
                <label tabIndex={0} className="mt-1"><button><CgDetailsMore size={'2rem'}/></button></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a className="text-[#265073]  text-lg font-bold">{user.displayName}</a></li>
                  <li><a><button className="but text-accent border-0"  onClick={handleLogout}>Logout</button></a></li>
                  {
                     user && isAdmin &&  <li><Link to='/dashboard/adminProfile'><button className="but text-accent border-0" >Dashboard</button></Link></li>
                  }
                  {/* {
                      user && !isAdmin && <li><Link to='/dashboard'><button className="but text-accent border-0" >Dashboard</button></Link></li>
                  } */}
                 

                </ul>
              </div>

              </div>
              
              </>
                :
                <>
                 <Link to='/login'><button className="but py-2  px-4 font-semibold border border-white rounded-lg bg-[#71c5c5]  text-white ">Login</button></Link>
                </>
                

            }

          </div>
</div>

      </div>

    );
};

export default Navbar;