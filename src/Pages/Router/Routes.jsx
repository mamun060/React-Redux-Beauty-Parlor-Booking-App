import React from "react";
import About from "../Home/About";
import Blogs from "../Home/Blogs";
import Gallary from "../Home/Gallary";
import Pricing from "../Home/Pricing";
import Service from "../Home/Service";
import Home from './../Home/Home';
import ContactUs from "../ContactUs/ContactUs";


const routes = [
    {
        path: '/',
        element: <Home />,
        isPrivate: false
    },
    {
        path: '/about',
        element: <About />,
        isPrivate: false
    },
    {
        path: '/service',
        element: <Service />,
        isPrivate: false
    },
    {
        path: '/pricing',
        element: <Pricing />,
        isPrivate: false
    },
    {
        path: '/gallery',
        element: <Gallary />,
        isPrivate: false
    },
    {
        path: '/blog',
        element: <Blogs />,
        isPrivate: false
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
        isPrivate: false
    },
]

export default routes;