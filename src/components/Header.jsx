import React from 'react'
import Logo from '../img/logo.svg'
import B20 from '../img/B20.jpg'
import { Link, NavLink } from 'react-router-dom'



function header() {
   return (
      <>
         <nav class="navbar main-nav navbar-expand-lg px-2 pt-0 pb-2 customeNavBar border-bottom active">
            <div className="container">
               <Link className="navbar-brand" to="/"><img src={Logo} alt="Evolv" className="brandImg" /></Link>

               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="ti-menu"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarNav">

                  <ul className="navbar-nav mx-auto">
                     <li className="nav-item dropdown @@about show">
                        <NavLink className="nav-link dropdown-toggle" to="" data-toggle="dropdown" aria-expanded="true">ABOUT
                           <span><i className="ti-angle-down"></i></span>
                        </NavLink>
                        <ul className="dropdown-menu show">
                           <li>
                              <NavLink className="dropdown-item @profile " to="/profile">
                                 PROFILE
                              </NavLink>
                           </li>
                           <li>
                           <NavLink className="dropdown-item @profile " to="/leader">
                           LEADERSHIP
                           </NavLink>
                        </li>
                        <li>
                        <NavLink className="dropdown-item @profile" to="/advisorcouncil">
                        ADVISORY COUNCIL
                        </NavLink>
                     </li>
                        </ul>
                     </li>
                     <li className="nav-item @@CALENDAR ">
                          <NavLink class="nav-link" to="/calender">CALENDAR</NavLink>
                     </li>



                  </ul>


               </div>

               <img src={B20} alt="Evolv" className="b20-logo d-xl-block d-lg-block  d-md-none d-sm-none d-none" />

            </div>


         </nav>



      </>
   )
}

export default header