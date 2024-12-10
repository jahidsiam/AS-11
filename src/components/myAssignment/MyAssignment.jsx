import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import AssignmentTable from "./AssignmentTable";
import { Helmet } from "react-helmet";


const MyAssignment = () => {
    const {user} = useContext(AuthContext)
    const [lists,setList] = useState([])
    
    
    
    useEffect(()=>{
        fetch(`https://assignment-11-server-seven-bice.vercel.app/my-assignment/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },
    [user])
    return (
        <div>
             <Helmet>
                <title>My Assignment</title>
            </Helmet>
        <Navbar></Navbar>
        <div className="mb-20">
            <h2 className="text-4xl text-center mt-10 mb-4">My Submitted Assignment: {lists.length}</h2>
             {
                lists.map(list=><AssignmentTable key={list._id} list={list}>
            
                </AssignmentTable>)
             }
                       
        </div>
        <Footer></Footer>  
        </div>
    );
};

export default MyAssignment;