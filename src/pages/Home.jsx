import React from 'react'

// IMAGES 

import Herobg from '../img/hero_page/2.jpg'




function home() {
  return (
    <>
    
    <section className="section hero_section" style={{ backgroundImage: `url(${Herobg})` }}>
        <div className="container">
            <div className="row align-items-center">
                <div id="map"></div>
                <div className="col-12 mx-auto text-center">
                    <h1>Innovation is a</h1>
                    <h1>Global Playground!</h1>
                    <h4>Evolv™ is a research-based, data-driven program designed to empower entrepreneurs with an action-oriented global playbook. </h4>
                    </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default home