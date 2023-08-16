import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Hero from "../Component/Hero/Hero";
import Courses from "../Component/Courses/Courses";
import LogIn from "../Component/LogIn/LogIn";
import Register from "../Component/Register/Register";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Hero></Hero>,  
        },
        {
            path:'/courses',
            element:<Courses></Courses>
        },
        {
            path:'/logIn',
            element:<LogIn></LogIn>
        },
        {
            path:'/signUp',
            element:<Register></Register>
        }
        
    ]
}]);
