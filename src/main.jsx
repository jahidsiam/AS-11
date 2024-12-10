
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import CreateAssignment from './components/createAssignment/CreateAssignment.jsx';
import PendingAssignment from './components/pendingAssignment/PendingAssignment.jsx';
import MyAssignment from './components/myAssignment/MyAssignment.jsx';
import Private from './components/Private/Private.jsx';
import Assignment from './components/Assignment/Assignment.jsx';
import ViewAssignment from './components/viewAssignment/ViewAssignment.jsx';
import Update from './components/Update/Update.jsx';
import {HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://assignment-11-server-seven-bice.vercel.app/assignment')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/assignments',
        element: <Assignment></Assignment>,
        loader: ()=> fetch('https://assignment-11-server-seven-bice.vercel.app/assignment')
      },
      {
        path: '/view-assignment/:id',
        element: <Private>
          <ViewAssignment></ViewAssignment>
        </Private>,
        loader: ()=> fetch('https://assignment-11-server-seven-bice.vercel.app/assignment')
      },
      {
        path: '/create-assignment',
        element: <Private>
          <CreateAssignment></CreateAssignment>
        </Private>
      },
      {
        path: '/pending-assignment',
        element: <Private>
          <PendingAssignment></PendingAssignment>
        </Private>,
      },
      {
        path: '/my-assignment',
        element: <Private>
          <MyAssignment></MyAssignment>
        </Private>
      },
        {
          path: '/update/:id',
          element: <Private>
            <Update></Update>
          </Private>,
          loader: ({params}) => fetch(`https://assignment-11-server-seven-bice.vercel.app/assignment/${params.id}`)
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div className='bg-[#aba98c] lg:w-[1330px]  md:w-full w-full mx-auto'>
  <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
    </div>
    
  
)
