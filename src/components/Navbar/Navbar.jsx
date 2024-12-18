import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = <>
   <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
HOME
</NavLink>
   <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
ABOUT 
</NavLink>
   <NavLink
  to="/service"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
SERVICE
</NavLink>
   <NavLink
  to="/allProjects"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
ALL PROJECTS
</NavLink>
   <NavLink
  to="/news"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
NEWS
</NavLink>
   <NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
CONTACT
</NavLink>
   <NavLink
  to="/shop"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "   text-light-blue-900 hover:text-orange-900 " :  " text-light-blue-900 hover:text-orange-900"
  }
>
SHOP
</NavLink>
  </>
    return (
        <div className="px-10 shadow-xl p-4">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <a className=" text-xl"><img src={"https://i.ibb.co.com/pKSvcms/download.png"} alt="" /></a>
  </div>

  <div className="navbar-end">
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 font-bold text-[16px]">
     {navLinks}
    </ul>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;