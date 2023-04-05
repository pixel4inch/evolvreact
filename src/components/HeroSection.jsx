import React from 'react'
// CSS IMPORT

// PLUGINES
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// IMPORT DATA
import HomeSlideData from"../data/SlideData.json"

// IMAGES 
import Herobg from '../img/hero_page/2.jpg'


function HeroSection() {


    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 15,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <>
            <section className="section hero_section" style={{ backgroundImage: `url(${Herobg})` }}>
                <div className="container">
                    <div className="row align-items-center mx-0">
                        <div className="col-12 mx-auto text-center">
                            <h1>Innovation is a</h1>
                            <h1>Global Playground!</h1>
                            <h4>Evolv™ is a research-based, data-driven program designed to empower entrepreneurs with an action-oriented global playbook. </h4>
                        </div>
                    </div>


                    <div className="row mx-0 my-3" style={{ zIndex: "9999" }}>

                        <div className='w-100'>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                        
                        
                        {
                            HomeSlideData.SlidesList.map( slidedata => {
                                return(
                                    <div className='item' key={slidedata.id}>
                                    <img src= {slidedata.slideImage} alt={slidedata.id}/>
                                        
                                   </div>
                                )
    
                            })
                        }
                        
                        
                       


                        </OwlCarousel>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}

export default HeroSection