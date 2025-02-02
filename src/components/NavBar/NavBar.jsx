import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu,IoIosClose } from "react-icons/io";

const NavBar = () => {
    const [opne,setOpen]=useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];

    return (
        <nav>
            <div onClick={()=>setOpen(!opne)} className="text-2xl md:hidden">
                {
                    opne === true ? <IoIosMenu /> :  <IoIosClose  />
                }
                {/* <IoIosMenu /> */}
                </div>
            <ul className="md:flex">
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
