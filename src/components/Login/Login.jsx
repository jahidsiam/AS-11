import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import { FaGoogle,FaRegEye } from "react-icons/fa";

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../../../firebase.config';






const Login = () => {
    const {loginUser} = useContext(AuthContext)
  const location = useLocation();
  const [showPass,setShowPass] = useState(false)
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  
  console.log(location)
  const handleClick = () =>{
    signInWithPopup(auth,provider)
    .then(result=>{
     const user = result.user;
     console.log(user)
     toast.success('Login Successful')
     navigate(location?.state?location.state:'/') 
 })
 .catch(error=>{
    console.log('error',error.message)
    toast.error('Invalid Credentials')
    
})
}

const handleGitHub = () =>{
  signInWithPopup(auth,gitProvider)
  .then(result=>{
    
      const user = result.user;
      console.log(user)
      toast.success('Login Successful')
      navigate(location?.state?location.state:'/')
      
     
  })
  .catch(error=>{
      console.log(error)
      toast.error('Invalid Credentials')
     
  })
}



const handleLogin = e =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
   
    
    loginUser(email,password)
    .then(result=>{
        console.log(result.user)
        
        toast.success('Login Successful')
        navigate(location?.state?location.state:'/')
        
    })
    .catch(error=>{
        console.error(error)
        toast.error('Invalid Credentials')
    })
   
}



    return (
        <div className="" >
          
          <Helmet>
                
                <title>Login</title>
                
            </Helmet>
            <Navbar></Navbar>
            <h3 className='text-center text-white text-4xl mt-20'>Login To StudyTogether</h3>
            <div className="mx-auto lg:w-[430px] md:w-[430px] w-[365px] mb-10 mt-10  rounded-2xl bg-white">
            <form   onSubmit={handleLogin} >
      <div className="form-control px-10 pt-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control px-10">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          
        
        <input type={showPass ? 'text' : "password"} name="password" placeholder="password" className="input input-bordered" required 
          />
          <span className="lg:ml-80 md:ml-80 ml-64 -translate-y-8 lg:-translate-y-8 " onClick={()=>{
            setShowPass(!showPass)
          }}>
           <FaRegEye />
          </span>
        
          
          
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 px-10">
          <button className="btn bg-[#e7642b] text-white">Login</button>
        </div>
       
        
      </form>
      <hr className="mt-4 w-[75%] mx-auto border-[1px] border-dashed border-[#0d0d0d1a]" />
      <div className="mt-4 gap-2 pb-8 mx-auto items-center flex flex-col justify-items-center">
             
           <button onClick={handleClick} className="btn bg-[#e7642b] text-white rounded-lg md:w-[350px] w-[285px]">
           <FaGoogle />
           Login With Google
           </button>
           <button onClick={handleGitHub} className="btn bg-[#e7642b] text-white rounded-lg md:w-[350px] w-[285px]">
           <FaGoogle />
           Login With GitHub
           </button>
            </div>
      
            </div>
    
            <p className="px-10 text-white text-center pb-4">no account? please <Link to={'/register'}>
              <button className="btn border-none bg-[#e7642b] text-white font-sans lg:font-semibold lg:text-lg  rounded-lg">
              Register
              </button>
              </Link></p>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
 
    </div>
    );
};

export default Login;