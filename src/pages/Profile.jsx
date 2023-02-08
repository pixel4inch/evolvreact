import React from 'react'

// IMAGES 

import Profilebg from '../img/hero_page/profile.jpg'

function Profile() {
  return (
    <>
        <section class="section hero_section profile" style={{ backgroundImage: `url(${Profilebg})` }}>
            <div class="container">
        <h1>Evolv™ is a Silicon Valley based program of the Confederation of Indian Industry (CII), the non-profit
            powerhouse with <span>62</span> offices, <span>10</span> centers of excellence, <span>9000</span> corporate members, <span>11,000+</span>
            startups/scale-ups, and <span>300,000+</span>  affiliated entities worldwide. </h1>
            <br/>
        <p class="text-left para-display4" >Evolv™ aspires to be the global facilitator
            for innovators and their startups by connecting them to investors, big enterprise, and government through a
            myriad of events and engagements. Evolv™ provides the right platform for multidimensional business &amp;
            technology partnerships, thereby presenting the perfect global playbook. CII’s strategic objective is to
            build a strong nexus for the world’s most innovative startups that will become tomorrow's drivers for
            technological leadership, economic growth, and long-term nation building.</p>
            <br/>

        <p class="text-left para-display4">As the official Secretariat for 2023 <a href="https://www.b20india2023.org/" class="linkblue" target="_blank">B20 Summit</a> and multiple programs it offers, this is a perfect
            opportunity for innovators, investors, big enterprises, and governments to get engaged.</p>
        </div>
        </section>
    
    </>


  )
}

export default Profile