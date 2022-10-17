import React from 'react'

const Title = ({ title, subtitle }) => (
  <>
    <div className="relative text-center">
      <span className="font-bold text-5xl md:text-7xl text-blue-600 
      opacity-10 uppercase tracking-[10px] absolute top-2/4 left-2/4 translate-y-[-50%] 
      translate-x-[-50%] whitespace-nowrap">
        {title}
      </span>
      <h2 className="text-3xl md:text-4xl translate-y-1 text-slate-800 font-bold uppercase tracking-[2px]">{title}</h2>
    </div>
    <div className="flex items-center justify-center mt-[1.6rem] ">
      <span className="inline-block h-[10px] w-[10px] rotate-45 bg-slate-500" />
      <p className="font-semibold text-slate-500 mx-3">{subtitle}</p>
      <span className="inline-block h-[10px] w-[10px] rotate-45 bg-slate-500" />
    </div>
  </>
)

export default Title