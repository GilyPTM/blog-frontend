import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../images/logo-blog.png";

export default function NavBar() {
  const { authenticated, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <img src={logo} width={50} height={50} alt="" />
        <a className="navbar-brand ps-2" href="/">
          Gily's Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
                        <Link to="/" className='nav-link active'>Home</Link>
                    </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <Link to="/posts" className='nav-link'>Posts</Link> */}
              <NavLink
                to="/posts"
                activeclassname="active"
                className="nav-link"
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <Link to="/contact" className='nav-link'>Contact Us</Link> */}
              <NavLink
                to="/contact"
                activeclassname="active"
                className="nav-link"
              >
                Contact Us
              </NavLink>
            </li>
            {!authenticated && (
              <li className="nav-item">
                <NavLink
                  to="/mylogin"
                  activeclassname="active"
                  className="nav-link"
                >
                  Login
                </NavLink>
              </li>
            )}
            {!authenticated && (
              <li className="nav-item">
                <NavLink
                  to="/myregister"
                  activeclassname="active"
                  className="nav-link"
                >
                  Register
                </NavLink>
              </li>
            )}

            {authenticated && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/add-post"
                      activeclassname="active"
                      className="dropdown-item"
                    >
                      Add post
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/view-posts"
                      activeclassname="active"
                      className="dropdown-item"
                    >
                      View Posts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/view-users"
                      activeclassname="active"
                      className="dropdown-item"
                    >
                      View Users
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
            {authenticated && (
              <li className="nav-item">
                <NavLink
                  activeclassname="aaa"
                  onClick={logout}
                  className="nav-link"
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" aria-disabled="true">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
