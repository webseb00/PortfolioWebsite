import React, { useEffect, useState } from 'react'
import { ThreeCircles } from  'react-loader-spinner'

const Preloader = () => {

  return (
    <>
      <div className="side_1 bg-slate-200 transition duration-[1400ms] ease-out fixed top-0 left-0 w-full h-1/2 z-50" />
      <div className="loader absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] z-60">
        <ThreeCircles
          height="80"
          width="80"
          color="#2563eb"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
      <div className="side_2 bg-slate-400 transition duration-[1400ms] ease-out fixed left-0 bottom-0 w-full h-1/2 z-50" />
      </>
  )
}

export default Preloader