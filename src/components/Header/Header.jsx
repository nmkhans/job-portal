import React from "react";
import { Link } from "react-router";

const NavLinks = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Find a job</Link>
      </li>
      <li>
        <Link to="/">Recruiters</Link>
      </li>
      <li>
        <Link to="/">Candidates</Link>
      </li>
      <li>
        <Link to="/">Pages</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
      <li>
        <Link to="/">Contacts</Link>
      </li>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              ></div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLinks />
              </ul>
            </div>
            <Link to="/">
              <h4 className="text-xl font-semibold text-primary">
                Carrier Code
              </h4>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-secondary font-medium">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary hover:btn-secondary text-white">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
