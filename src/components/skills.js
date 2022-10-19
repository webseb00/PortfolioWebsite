import React from "react"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Title } from "./"
import { SiHtml5, SiSass, SiBootstrap, SiTailwindcss, SiCss3, SiGatsby, SiReact, SiRedux, SiReactrouter, SiGit, SiJavascript, SiNpm  } from 'react-icons/si'

const Skills = () => {

  return (
    <div className="mt-[2rem]">
      <Title
        title="Technologie"
        subtitle="Zakres technologii które wykorzystuję obecnie przy swoich projektach"
      />
      <div className="mx-auto my-[3rem] max-w-[90%] md:max-w-[60%] p-2.5">
        <MouseParallaxContainer className="flex flex-wrap items-center justify-center" resetOnLeave>
          <MouseParallaxChild 
            factorX={0.07}
            factorY={0.05}
            className="m-2"
            >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiHtml5 className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">HTML</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.09}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiCss3 className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">CSS</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.05}
            factorY={0.1}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiJavascript className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">JavaScript</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiSass className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">Sass</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiBootstrap className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">Bootstrap</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.02}
            factorY={0.08}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiTailwindcss className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">Tailwind CSS</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.08}
            factorY={0.08}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiNpm className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">NPM</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.08}
            factorY={0.08}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiGit className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">GIT</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.07}
            factorY={0.09}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiReact className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">React</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.01}
            factorY={0.04}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiRedux className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">React-Redux</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.01}
            factorY={0.04}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiReactrouter className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">React-Router</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.05}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-2 bg-gray-100 text-slate-700 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <SiGatsby className="text-2xl" />
              <p className="ml-1 font-robotoMono font-semibold">Gatsby</p>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </div>
  )
}

export default Skills