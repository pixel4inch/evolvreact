import React from 'react'

function PageTitle(props) {
  return (
    <>
    <div className="row mt-3">
             <h3 class="b-0  pt-5 pb-3 text-center w-100 text-uppercase font-display1 main-font-color ">{props.title}</h3>
     </div>
    
     </>
  )
}

export default PageTitle