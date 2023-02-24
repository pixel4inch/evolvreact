import React from 'react'

function Datagraphic({DataGrapic, DataGraphicLink}) {
  return (
    <>
      <div className="col-lg-10 col-md-12 p-2  mx-auto my-3 ">
            <img  src={DataGrapic}  className="border  mb-2 img-fluid d-block mx-auto"/>
            <p className="infolink mt-1 text-right">Source: <a href={DataGraphicLink}  target="_blank"  className="linkblue"> StrategyR</a></p>   
      </div>
    </>
  )
}

export default Datagraphic