import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import Signup from "../Pages/Signup/Signup";


export const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/media',
        element: <Media></Media>
      },
      {
        path: '/message',
        element: <Message></Message>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  }

]);