import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
    const links = <>
             <li><NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to='/'>Home</NavLink></li>
             <li><NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to='/assignments'>Assignments</NavLink></li>
            
             { user?.email ?  <>
            <li><NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to="/create-assignment">Create Assignments</NavLink></li>
            
            <li><NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to="/pending-assignment">Pending Assignments</NavLink></li>
           
        </> 
        : <>
        <li> <NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to="/login">Login</NavLink> </li>
        <li> <NavLink className={({isActive})=>isActive ? ' bg-black text-[#ffcd00] rounded-md font-sans text-lg' : ' font-sans text-lg text-green-500'} to="/register">Register</NavLink> </li>
        
        </>
       }
       </>

            


const handleLogOut = () =>{
    logOut()
    .then(()=>{
      console.log('logout success')
      toast.success('Logout Successful')
      
    })
    .catch(error=>{
      console.error(error)
    })
  }

    return (
        <div className="navbar    bg-[#5c5146] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-green-500">StudyTogether</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
        {
 user ? <>
  
 <div className="dropdown dropdown-hover">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
         
         {user.photoURL? <img src={user.photoURL} alt=""  /> : 
         <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
           
         }
        
       </div>
     </div>
     <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 right-0 bg-[#f8f3f0] text-center">
      
       <li className="uppercase text-green-500">{user.displayName}</li>
       <li className="bg-[#f8f3f0] text-green-500 lg:ml-10 font-sans lg:font-semibold lg:text-lg  rounded-lg"><Link to="/my-assignment">My Attempted Assignments</Link></li>
       
       <li onClick={handleLogOut} className="btn bg-[#f8f3f0] text-green-500 font-sans lg:font-semibold lg:text-lg  rounded-lg">Sign Out</li>
     </ul>
   </div>
   
   </> : 
    <>
    </>
  }
      </div> 
      <ToastContainer></ToastContainer> 
      </div>
    );
};

export default Navbar;