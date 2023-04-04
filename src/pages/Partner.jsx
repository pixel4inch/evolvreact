import React from 'react'
import { Link } from 'react-router-dom'

import EvolvData from '../data/EvolvData.json'

//import component 
import { PageTitle } from '../components'

function Partner() {
  return (
    <>
    <section className="design-team section pt-2">
	    <div className="container">
      <PageTitle title="PARTNERING WITH EVOLV™" />

        <div className='row mx-auto'>
          <p className='para-display2 text-center font-weight-bold w-100'>
          We welcome partnerships with entities and associations that support the global tech entrepreneur. Please <Link to="/contact"   style={{color: "blue"}}>contact </Link> us.
          </p>  
        </div>

          <div className='row mt-4 mx-auto ligh-bg'>
            {
              EvolvData.slice(0, 30).map((value, key) =>
                (
                  <div className='   col-xl-2 col-lg-2    col-md-3 col-6 '   >
                    <div class="col-11 border  my-3 mx-auto bg-white  shadow-sm d-flex align-items-center   text-center p-4" style={{ height:"100px", overflow:"hidden"}}>
                         <img src={value.CompanyLogo} className="img-fluid" />
                    </div>
                  
                  </div>
                  )
              )

            }
          </div>


      </div>
      </section>
    </>
  )
}

export default Partner