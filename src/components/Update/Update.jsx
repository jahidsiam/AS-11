import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Update = () => {
    const loader = useLoaderData()
    console.log(loader)
    const [startDate, setStartDate] = useState(new Date());
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value
        const thumbnail_image_url = form.thumbnail_image_url.value
        const marks = form.marks.value
        const description = form.description.value
        const difficulty_level = form.difficulty_level.value
        const due_date = form.due_date.value
        
        const updateAssignment = {title,thumbnail_image_url,marks,description,difficulty_level,due_date}
        console.log(updateAssignment)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-seven-bice.vercel.app/assignment/${loader._id}`,{
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updateAssignment)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount>0){
            Swal.fire({
                title: "Updated!",
                text: "Your assignment has been updated.",
                icon: "success"
              });
             }
        });
            }
          });
    }
    return (
        <div>
             <Helmet>
                  
                  <title>Create New</title>
                  
              </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleUpdate} className="mx-auto lg:w-[1320px] md:w-[750px] w-[365px] mb-10 mt-10  rounded-2xl bg-white p-4">
            <div className='lg:flex mb-4'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='title' defaultValue={loader.title} placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control lg:w-1/2 lg:ml-4">
  <label className="label">
    <span className="label-text">Image URL</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='thumbnail_image_url' defaultValue={loader.thumbnail_image_url} placeholder="Quantity" className="input input-bordered w-full" />
  </label>
</div>
            </div>


            <div className='lg:flex mb-4'>
            <div className="form-control lg:w-1/2 ">
  <label className="label">
    Difficulty Level
  </label>
  
  <select className="select select-bordered join-item" name='difficulty_level' defaultValue={loader.difficulty_level}>
  <option disabled selected>Select Level</option>
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
  </select>
    
    
    
 
</div>
            <div className="form-control lg:w-1/2 lg:ml-4 lg:translate-y-1">
  <label className="label">
    <span className="label-text">Marks</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='marks' defaultValue={loader.marks} placeholder="Marks" className="input input-bordered w-full" />
  </label>
</div>
            </div>
            <div className="form-control mb-3">
              <p className="pb-2">Description</p>
              <textarea className="px-4 py-2 border-[1px] rounded-xl input-bordered" placeholder="Write A Short Description" name="description" defaultValue={loader.description} id="" cols="30" rows="5"></textarea>
            </div>
            <div className='mb-3 '>
            <div>
<label className="label">
  <span className="label-text">Select Your Date</span>
</label>
<label  className="input-group">
  
<DatePicker    className="input input-bordered"   selected={startDate} onChange={(date) => setStartDate(date)} defaultValue={loader.due_date} name="due_date" />
</label>
</div> 
           </div>
            <input type="submit" value="Update" className="btn bg-[#007bff] text-white w-full mt-3 mb-3" />
            </form>
            <Link to='/'>
      <button className="btn border-none bg-[#007bff] text-white mb-8 mt-8 ">Go Back</button>
      </Link>
              <Footer></Footer>
          </div>
    );
};

export default Update;