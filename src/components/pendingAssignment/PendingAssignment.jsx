
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useEffect, useState,} from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PendingAssignment = () => {
  const {user} = useContext(AuthContext)
  const status = 'pending'
  const [pending,setPending] = useState([])
   useEffect(()=>{
    fetch(`https://assignment-11-server-seven-bice.vercel.app/pending-assignment/${status}`)
    .then(res=>res.json())
    .then(data=>{
      setPending(data)
    })
   },[])

   console.log(pending)

   
    const handleSubmitAssignment = e =>{
      e.preventDefault()
      const form = e.target;
      const feedback = form.feedback.value;
     const obtained_marks = form.obtained_marks.value;
      const email = user.email
      const name = user.displayName
      const status = 'pending'
      const submitAssignment = {feedback,obtained_marks,name,email,status}
      
      console.log(submitAssignment)

      fetch(`https://assignment-11-server-seven-bice.vercel.app/pending-assignment/${status}`, {
        method: 'GET',
       
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
               
            }
        })
    }
    
   
    
    
   
    return (
        <div>
         <Navbar></Navbar>
        
     {
      pending.map(p=> <div key={p._id} className="mt-16 mb-16">
      <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Title</th>
          <th>Name</th>
          <th>Assignment Marks</th>
          <th>PDF Link</th>
          <th>Notes</th>
          <th>Owner Email</th>
        </tr>
      </thead>
      <tbody >
                    <tr>
                      
                      
                      <td>{p.title}</td>
                      <td>{p.name}</td>
                      <td>{p.marks}</td>
                      <td>{p.pdf}</td>
                      <td>{p.notes}</td>
                      <td>{p.email}</td>
                      <td><button className="btn border-none bg-[#007bff] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
<form onSubmit={handleSubmitAssignment}>
        <div className='lg:flex mb-4'>
        <div className="form-control lg:w-1/2 ">
<label className="label">
<span className="label-text">Marks</span>
</label>
<label className="input-group">

<input type="text" name='obtained_marks' placeholder="Give Marks" className="input input-bordered w-full" required/>
</label>
</div>
        <div className="form-control lg:w-1/2 lg:ml-4">
<label className="label">
<span className="label-text">Feedback</span>
</label>
<label className="input-group">

<input type="text" name='feedback' placeholder='Give Feedback here' className="input input-bordered w-full" required/>
</label>
</div>
        </div>
        <input type="submit" value="Submit" className="btn bg-[#007bff] text-white w-full mt-3 mb-3" />
</form>
        
<div className="modal-action">
  <form method="dialog">
    {/* if there is a button in form, it will close the modal */}
    <button className="btn">Close</button>
  </form>
</div>
</div>
</dialog>
</td>
                      
                      
                   
                    </tr>
                  </tbody>
      
    </table>
  </div>
  
  </div>)
     }
         <Footer></Footer>   
        </div>
    );
};

export default PendingAssignment;

// {sign.map(p=><div key={p._id} className="overflow-x-auto">
// <table className="table">
  {/* head */}
  {/* <thead>
    <tr>
      <th>Title</th>
      <th>Assignment Marks</th>
      <th>PDF Link</th>
      <th>Notes</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody >
                <tr>
                  
                  
                  <td>{p.title}</td>
                  <td>{p.marks}</td>
                  <td>{p.pdf}</td>
                  <td>{p.notes}</td>
                  <td>{p.user_name}</td>
                  <td><button className="btn border-none bg-[#007bff] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
<form onSubmit={handleSubmitAssignment}>
    <div className='lg:flex mb-4'>
    <div className="form-control lg:w-1/2 ">
<label className="label">
<span className="label-text">Marks</span>
</label>
<label className="input-group">

<input type="text" name='obtained_marks' placeholder="Give Marks" className="input input-bordered w-full" required/>
</label>
</div>
    <div className="form-control lg:w-1/2 lg:ml-4">
<label className="label">
<span className="label-text">Feedback</span>
</label>
<label className="input-group">

<input type="text" name='feedback' placeholder='Give Feedback here' className="input input-bordered w-full" required/>
</label>
</div>
    </div>
    <input type="submit" value="Submit" className="btn bg-[#007bff] text-white w-full mt-3 mb-3" />
</form>
    
<div className="modal-action">
<form method="dialog"> */}
{/* if there is a button in form, it will close the modal */}
{/* <button className="btn">Close</button>
</form>
</div>
</div>
</dialog>
</td>
                  
                  
               
                </tr>
              </tbody>
  
</table>
</div>)} */}