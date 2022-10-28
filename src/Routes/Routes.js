import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import HeroSection from "../components/HeroSection/HeroSection";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPages from "../components/ErrorPages/ErrorPages"

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPages/>,
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
                path: '/faq',
                element: <FAQ></FAQ>
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
                loader: ({params}) => fetch(`https://y-pi-lilac.vercel.app/course-detail/${params.id}`),
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,

            }
           
        ],
    }
 ])