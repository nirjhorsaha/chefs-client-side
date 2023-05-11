import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Components/Blog/Blog";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignInPage from "../Pages/login/SignInPage";
import Contact from "../Components/Contact/Contact";
import SingleChef from "../Components/SingleChef/SingleChef";
import PrivateRoute from "./PrivateRoute";
import Chefs from "../Components/Chefs/Chefs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/chefs',
                element: <Chefs/>
            },
            {
                path: '/login',
                element: <SignInPage/>
            },
            {
                path: '/signup',
                element: <Registration/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: ':id',
                element: <PrivateRoute><SingleChef /></PrivateRoute>,
                loader: ({params}) => fetch(`https://chefs-server-side-nirjhorsaha.vercel.app/chefs/${params.id}`)
                
            }

        ]
    }
]);

export default router;