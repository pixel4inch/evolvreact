import React from 'react'
//IMPORT PLUGINS
import { useParams } from 'react-router-dom';

//IMPORT DATABASE

import EventsData from '../data/EventsData.json'

//IMPORT COMPONENTS
import {VerticalsBanner, Datagraphic} from '../components'


function Calevents() {

    let {EventId} = useParams();

  return (
    <>
    <VerticalsBanner Title={EventId}/>  
    {EventsData.eventslist.map( data => 
            {
        return(data.Event) === `${EventId}` ? 
           
            <div>
                <Datagraphic DataGrapic={data.eventdatagraphic}  DataGraphicLink={data.eventdatagraphiclink}/>
                <p>{data.eventtitle}</p>
            </div>
             
            :
            
            ""     
        
            }
        )}


    
    </>
  )
}

export default Calevents