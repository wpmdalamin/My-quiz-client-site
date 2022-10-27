import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import HeroSection from "../components/HeroSection/HeroSection";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/course',
                element: <Courses></Courses>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/',
                element: <HeroSection></HeroSection>
            },
            {
                path: '/course-detail/:id',
                loader: ({params}) => fetch(`http://localhost:5000/course-detail/${params.id}`),
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,

            }
           
        ],
    }
 ])