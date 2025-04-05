import Home from "@containers/Home/Home"
import About from "@containers/About/About"
import Dashboard from "@containers/Dashboard/Dashboard"
import Map from "@containers/Map/Map"
import Landing from "@containers/LandingPage/LandingPage"
const routes = [
    {
        path: "/Home",
        end: true,
        component: Home,
    },
    {
        path: "/about",
        end: true,
        component: About,
    },
    {
        path: "/dashboard",
        end: true,
        component: Dashboard
    },
    {
        path:"/",
        end:true,
        component: Landing
    }
]

export default routes
