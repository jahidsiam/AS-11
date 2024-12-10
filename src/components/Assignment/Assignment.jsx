import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";


const Assignment = () => {
    const assignment = useLoaderData()
    console.log(assignment)
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] = useState(assignment);
    const [sortRead,setReadSort] = useState(assignment)

    const handleDelete = id => {
      const proceed = confirm('Are You sure you want to delete');
    
      if (proceed) {
          fetch(`https://assignment-11-server-seven-bice.vercel.app/delete/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      toast.success('deleted successful');
                      const remaining = assignments.filter(assignment => assignment._id !== id);
                      setAssignments(remaining);
                      
                  }
                  
              })
      }
  }

  const handleReadEasy= filter =>{
    if(filter === 'difficulty_level'){
      const storeCat = assignment.filter(assignment=> assignment.difficulty_level === 'Easy');
      setReadSort(storeCat)
    }

}
  const handleReadMedium= filter =>{
    if(filter === 'difficulty_level'){
      const storeCat = assignment.filter(assignment=> assignment.difficulty_level === 'Medium');
      setReadSort(storeCat)
    }

}
  const handleReadHard= filter =>{
    if(filter === 'difficulty_level'){
      const storeCat = assignment.filter(assignment=> assignment.difficulty_level === 'Hard');
      setReadSort(storeCat)
    }

}
    return (
        <div>
           <Helmet>
                <title>All Assignments</title>
            </Helmet>
            
         <Navbar></Navbar> 
         
         <p className="mb-4 mt-4 text-white text-lg text-center">Here you can find
         <br />
          all the assignments</p>
          <div className="dropdown dropdown-bottom text-center mx-auto items-center justify-center flex">
  <div tabIndex={0} role="button" className="btn m-1">Difficulty Level</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <li onClick={()=>handleReadEasy('difficulty_level')}><a>Easy</a></li>
  <li onClick={()=>handleReadMedium('difficulty_level')}><a>Medium</a></li>
  <li onClick={()=>handleReadHard('difficulty_level')}><a>Hard</a></li>
  </ul>
</div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-10 mt-10 mb-10">
         {
         sortRead.map(p=><div key={p._id} className="card card-compact w-full bg-[#f8f3f0] shadow-xl">
         <figure><img src={p.thumbnail_image_url} alt="Shoes" /></figure>
         <div className="card-body">
           <h2 className="card-title">{p.title}</h2>
           <p>Description : {p.description}</p>
           <p>Marks : {p.marks}</p>
           <p>Difficulty : {p.difficulty_level}</p>
           <p>Due Date : {p.due_date}</p>
           <div className="card-actions">
            <Link to=
        {`/view-assignment/${p._id}`}>
            <button className="btn bg-blue-500 text-white">View Assignment</button>
            </Link>
            <Link to={`/update/${p._id}`}>
            <button className="btn bg-blue-500 text-white">Update</button>
            </Link>
             
           {
            user?.email === p.email ?  <button onClick={()=>handleDelete(p._id)} className="btn bg-blue-500 text-white">Delete</button> :  <button onClick={()=>handleDelete(p._id)} className="btn bg-blue-500 hidden text-white">Delete</button>
           }
           </div>
         </div>
       </div>)
         
        }
         </div>
       
         <Footer></Footer>  
        </div>
    );
};

export default Assignment;

