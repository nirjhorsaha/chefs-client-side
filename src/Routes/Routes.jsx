import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Components/Blog/Blog";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignInPage from "../Pages/login/SignInPage";
import Contact from "../Components/Contact/Contact";

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
                path: '/blog',
                element: <Blog/>
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
            }

        ]
    }
]);

export default router;