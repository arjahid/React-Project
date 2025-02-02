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
        <nav className="bg-yellow-200 p-6">
            <div onClick={()=>setOpen(!opne)} className="text-2xl md:hidden">
                {
                    opne === true ? <IoIosClose /> : <IoIosMenu />
                }
                
                </div>
            <ul className={`md:flex bg-yellow-200 px-6 absolute md:static duration-1000
                ${opne? 'top-16':'-top-60'}
                `}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
