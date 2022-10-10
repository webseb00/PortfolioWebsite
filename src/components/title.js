import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="relative">
      <span className="font-bold text-5xl md:text-7xl text-blue-600 
      opacity-10 uppercase tracking-[10px] absolute top-2/4 left-2/4 translate-y-[-50%] 
      translate-x-[-50%] whitespace-nowrap">
        {title}
      </span>
      <h2 className="text-3xl md:text-4xl translate-y-1 text-slate-800 font-semibold uppercase tracking-[2px]">{title}</h2>
    </div>
  )
}

export default Title