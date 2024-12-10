import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AssignmentTable = ({list,handleBookingConfirm}) => {
    const {user} = useContext(AuthContext)
   const {thumbnail_image_url,status,marks,title,_id} = list
   console.log(list)
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             <th>Email</th>
              <th>Image</th>
              <th>Title</th>
              <th>Assignment Marks</th>
              <th>Status</th>
              <th>My Obtained Marks</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody >
                        <tr>
                          <td>{user?.email}
                          <br />
                          <span>{user?.displayName}</span></td>
                          <td className="w-32"><img  src={thumbnail_image_url} alt="" /></td>
                          <td>{title}</td>
                          <td>{marks}</td>
                          <td>{status}</td>
                          
                          
                       
                        </tr>
                      </tbody>
          
        </table>
      </div>
    );
};

export default AssignmentTable;