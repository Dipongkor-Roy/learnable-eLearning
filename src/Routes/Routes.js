import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Hero from "../Component/Hero/Hero";
import Courses from "../Component/Courses/Courses";
import LogIn from "../Component/LogIn/LogIn";
import Register from "../Component/Register/Register";
import CardDetails from "../Component/CardDetails/CardDetails";
import Cart from "../Component/Cart/Cart";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Hero></Hero>,  
        },
        {
            path:'/logIn',
            element:<LogIn></LogIn>
        },
        {
            path:'/signUp',
            element:<Register></Register>
        },
        {
            path:'/courses',
            element:<Courses></Courses>,
            loader:()=>fetch('https://learnable-e-learning-server.vercel.app/courses')
        },
        {
            path:'/courses/:id',
            element:<CardDetails></CardDetails>,
            loader:({params})=>fetch(`https://learnable-e-learning-server.vercel.app/courses/${params.id}`)
        },
        {
            path:'/cart/:id',
            element:<Cart></Cart>,
            loader:({params})=>fetch(`https://learnable-e-learning-server.vercel.app/courses/${params.id}`)
        }
        
    ]
}]);
