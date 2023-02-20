import React from 'react'
import{PageTitle} from '../components'

//IMAGES

  



function Leader() {

  const leaderData = [
    {
      "position": 'co-charis',
      "name": "Ram K Reddy",
      "image": "https://www.evolv.cc/images/evolv/leader-ship/img_01.jpg",
      "profilelink": "https://www.linkedin.com/in/ramreddyk",
    },
    {
      "position": 'co-charis',
      "name": "Rajan Navani",
      "image": "https://www.evolv.cc/images/evolv/leader-ship/img_02.jpg",
      "profilelink": "https://in.linkedin.com/in/rajan-navani",
    }
  ]

  
  return (
    <>
    <PageTitle title="CO-CHAIRS"/>

    <div className="row px-5">

    {leaderData.map((value) => (
    
      <>
      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="team-sm">
           <div className="image mb-3">
               <a href={value.profilelink} target="_blank">
                   <img className="w-100 shadow border" src={value.image} alt="member-image"/>
               </a>
            </div>
              <a href={value.profilelink} target="_blank">
              <h1 className="text-center font-display3">{value.name}</h1>
              </a>
        </div>
      </div>
      </>
    ))}
    </div>
  
    </>
  )
}

export default Leader