import React from 'react'

//import component
import { Hero, SectionTitle,ButtonSm } from '../components'

//Import Images

import homeImage1 from '../img/home_image1.jpg'



function Home() {
  return (
    <>
      <Hero/>
      

      <section className='section'>
         <div className='container'>
          <div className='row'>
              <div className='col-md-6 col-12'>
                <div className="col-11 mx-auto">
                  <img src={homeImage1} className="img-fluid"/>
                </div>
              </div>
              
              <div className='col-md-6 col-12 '>
              <div className="col-11 mx-auto text-left ">

                <SectionTitle title1="WELCOME TO Evolv™" title2="Evolv™ Leading Tech Festival in-person And Digital"/>

                  <p className='mb-3 para-display3'>
                    With our in-person tech festival and our online networking tools, you'll be able to attend in Amsterdam and from across the globe.</p>

                    <p className='mb-3 para-display3'>
                    Rub Shoulders with international technology  with international technology executives, top-tier investors, policymakers, startups, and scale-ups, during two days of business, knowledge sharing and a whole lot of fun.</p>
                  
                    <ButtonSm link="" value="Know More.."/>
                    </div>
                </div>

          </div>
         </div>
      
      </section>

      <div class="col-xs-1-12">
        
      </div>
      

    </>
  )
}

export default Home