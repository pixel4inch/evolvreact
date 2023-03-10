import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import LinkedIn from '../img/Social_Icons/LinkedIn.png';
import Facebook from '../img/Social_Icons/Facbook.png';
import Instagarm from '../img/Social_Icons/Instagarm.png';
import Twitter from '../img/Social_Icons/Twitter.png';
import Youtube from '../img/Social_Icons/Youtube.png';

//import COMPONENT
import FooterNav  from "./FooterNav"

function footer() {
  return (
    <>
   
	  <footer>
	  <div className="footer-main">
		<div className="container">
		  <div className="row">
		   
			<div className="col-xl-12 col-1g-12 col-md-12 col-12 mx-auto align-self-center">
				<div className="block">
					<FooterNav/>	
				</div>
			</div>
			<div className="col-xl-11 col-1g-12 col-md-12 col-12 mx-auto footer-divider"></div>
			
  
			<div className="col-xl-11 col-1g-12 col-md-12 col-12 mx-auto align-self-center mt-2">
			  <div className="block text-center">
			
				<ul className="social-icon list-inline mb-0">
  
					
					<li className="list-inline-item">
					  <a href="#" target="_blank"><img src={LinkedIn} className="img-fluid social-icons"/></a>
				 </li>
				  <li className="list-inline-item">
					<a href="#" target="_blank"><img src={Facebook} className="img-fluid social-icons"/></a>
				  </li>
				  <li className="list-inline-item">
					<a href="#"><img src={Twitter} className="img-fluid social-icons"/></a>
				  </li>
				  <li className="list-inline-item">
					<a href="#" target="_blank"><img src={Instagarm} className="img-fluid social-icons"/></a>
				  </li>

				  <li className="list-inline-item">
					<a href="#" target="_blank"><img src={Youtube} className="img-fluid social-icons"/></a>
				  </li>

				</ul>



			  </div>
			</div>
		  
		  </div>
		</div>
	  </div>
	  <div className="text-center py-1 footer-copyright">
		<small className="text-secondary text-dark ">Copyright © <script language="JavaScript">document.write(new Date().getFullYear());</script>2023  Evolv™, All Rights Reserved.</small>
	  </div>
	</footer>

      
      
      


    
    </>
  )
}

export default footer