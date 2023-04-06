import React from 'react'

// IMAGES 

import Profilebg from '../img/hero_page/profile.jpg'

function Profile() {
    return (
        <>
            <section className="section hero_section profile" style={{ backgroundImage: `url(${Profilebg})` }}>
                <div className="container">
                    <h1 className="font-display2">EvolvTM is a Silicon Valley based program of the Confederation of Indian Industry (CII). CII is a non-governmental, not-for-profit powerhouse that is industry-led and industry-managed, with 1,200+ employees, 62 offices, 10 centers of excellence, 11,000+ startups/scale-ups, 9,000+ Corporate members from the private as well as public sectors, including SMEs and MNCs. Additionally CII network includes an indirect membership of 300,000+ affiliated enterprises from 286 national and regional sectoral industry bodies worldwide.
                    </h1>
                    <br />
                    <p className="text-left para-display4" >The Evolv™ Program aspires to be the global facilitator for innovative tech startups by connecting them to investors, big enterprise, and government through a myriad of events and engagements. Evolv™ provides the right platform for multidimensional business & technology partnerships, thereby presenting the perfect global playbook. CII's strategic objective is to build a strong nexus for the world's most innovative tech startups that will become tomorrow's drivers for technological leadership, economic growth, and long-term nation building.</p>
                    <br />
                    <p className="text-left para-display4">As the official Secretariat for 2023 <a href="https://www.b20india2023.org/" className="linkblue" target="_blank"><font color="#ff9921">B20 Summit</font></a> and multiple programs it offers, this is a perfect
                        opportunity for innovators, investors, big enterprises, and governments to get engaged.</p>
                </div>
            </section>
        </>
    )
}

export default Profile