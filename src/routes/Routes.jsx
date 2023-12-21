import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EventDetails from "../components/EventDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog";
import Opinion from "../pages/opinion/Opinion";
import Errorpgae from "../pages/Errorpage/Errorpgae";
import Dashboard from "../layouts/Dashboard";
import UserProfile from "../pages/userProfile/UserProfile";
import Tasks from "../pages/Tasks/Tasks";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement:<Errorpgae/>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            
            }, 
            {
                path: '/eventdetails/:event_id',
                element: <PrivateRoute><EventDetails/></PrivateRoute> , 
                loader: () => fetch('/events.json')
            
            }, 

            {
                path: '/blog', 
                element: <PrivateRoute><Blog/></PrivateRoute>,
                
            },
            {
                path: '/opinion', 
                element: <PrivateRoute><Opinion/></PrivateRoute>,
                
            },
            {
                path: '/login',
                element: <Login/>, 
        
            
            }, 
            {
                path: '/register',
                element: <Register/>, 
        
            
            }, 
          
        ]
    }   ,{
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute> ,
        children: [
          // normal user routes
    
    // {
    //   path: "requestedmeals",
    //   element: <PrivateRouteForNonAdmin><RequestedMeals/></PrivateRouteForNonAdmin> 
    
    // }

    // ,
    // {
    //   path: "userProfile",
    //   element:  <PrivateRouteForNonAdmin><MyProfile/></PrivateRouteForNonAdmin>
    
    // }
    // ,
    
    // {
    //   path: "myreviews",
    //   element: <PrivateRouteForNonAdmin><Myreviews/></PrivateRouteForNonAdmin> 
    
    // }
    // ,
    
          {
            path: "profile",
            element:<UserProfile></UserProfile> ,
          },
    
          {
            path: "tasks",
            element: <Tasks></Tasks>,
    
    
          },
    //       {
    //         path: "Addmeal",
    //         element: <AdminRoute> <AddMeal /></AdminRoute>,
    //       },
         
        ],
      } 
]);

export default router;