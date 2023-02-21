import React from 'react'

// IMPORT COMPONENTS
import { PageTitle, CalenderCard } from '../components'

// IMPORT DATA

import Calender_Data from "../data/CalenderData.json"

function Calender() {



  return (
    <>
      <div className='container'>
        <PageTitle title="INNOVATOR ECO-CONNECTS" />
        <h1 className="font-display2 text-center main-font-color  col-lg-11 mt-3 col-md-12 mx-auto ">
          Myriad of Programs Driven by Evolv™ Members, Partners, and Supporters
        </h1>
        <h2 class="font-display1 mt-0 text-center  col-lg-11 col-md-12 mx-auto text-capitalize">Let's <u>Evolve</u> Together!</h2>


      </div>

      <section className="timeline_area section_padding_130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="apland-timeline-area">
                  
                          {
                            Calender_Data.CalenderList.map( post => {
                              return(
                                <p>{post.Month}</p>
                                {post.Event.forEach( data => )}
                               
                              )
                            })
                          }
                          
                      

                 

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calender