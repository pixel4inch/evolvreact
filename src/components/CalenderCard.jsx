import React from 'react'

function CalenderCard(props) {
    return (
        <>
            <div class="single-timeline-area">
            
                <div class="timeline-date wow fadeInLeft">
                    <p>{props.Month}</p>
                </div>

                <div class="row pb-4" id="april">
                    <div class="  col-12 col-md-6 col-lg-4 px-1">
                      <div class="single-timeline-content d-flex wow fadeInLeft">
                            <div class="timeline-icon">
                                <img src={props.Icon}/></div>
                                <div class="timeline-text">
                                <h6>{props.EventTitle}</h6>
                                <h5>{props.EventDate}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CalenderCard