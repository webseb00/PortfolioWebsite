import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-[90vh] relative">
      <div className="absolute top-[64%] left-2/4 translate-y-[-50%] 
        translate-x-[-50%] text-black w-[90%] lg:w-[80%] z-10">
        <h1 className="text-center opacity-90 font-robotoMono">
          <span className="text-slate-200 text-3xl md:text-4xl lg:text-5xl bg-blue-600 inline-block mt-2 px-3 pt-2 pb-6 shadow-md">Basiński Sebastian</span><br />
          <span className="text-blue-600 text-lg md:text-2xl bg-slate-200 inline-block px-1 md:px-3 py-1 shadow-md translate-y-[-16px]">Junior Front-End Developer</span>
        </h1>
      </div>  
    </div>
  )
}

export default Hero