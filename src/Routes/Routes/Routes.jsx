import {createBrowserRouter} from "react-router-dom";
import Main from "../../components/Home/Home/Main/Main";
import Home from "../../components/Home/Home/Home";
import About from "../../components/About/About/About";
import Service from "../../components/Service/Service/Service";
import AllProjects from "../../components/AllProjects/AllProjects/AllProjects";
import News from "../../components/News/News/News";
import Contact from "../../components/Contact/Contact/Contact";
import Shop from "../../components/Shop/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        // error element
        element:  <Main/>,
        children : [
            {
                path : "/",
                element: <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/service",
                element  : <Service/>
            },
            {
                path : "/allProjects",
                element : <AllProjects/>
            },
            {
                path : "/news",
                element : <News/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/shop",
                element : <Shop/>
            },

        ]
    },
]);
