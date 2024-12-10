import { Link } from "react-router-dom";



const Feature = ({feature}) => {
    const {_id,title,description,marks,thumbnail_image_url,difficulty_level,due_date} = feature;
    return (
      
        
        <div className="card card-compact w-full  rounded-2xl">
         <figure><img src={thumbnail_image_url} alt="Shoes" /></figure>
         <div className="card-body bg-[#f8f3f0] rounded-b-2xl">
           <h2 className="card-title">{title}</h2>
           <p>Description : {description}</p>
           <p>Marks : {marks}</p>
           <p>Difficulty : {difficulty_level}</p>
           <p>Due Date : {due_date}</p>
           <div className="card-actions">
            <Link to=
        {`/view-assignment/${_id}`}>
            <button className="btn text-white bg-blue-500 border-none">View Assignment</button>
            </Link>
          
           </div>
         </div>
       </div>
     

    );
};

export default Feature;