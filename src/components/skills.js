import React from "react"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Title } from "./"
import { StaticImage } from "gatsby-plugin-image";
import { 
  Html,
  Css,
  JavaScript,
  sass,
  npm,
  bootstrap,
  tailwind,
  rwd,
  react,
  redux,
  gatsby
} from '../images'

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
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={Html} alt="HTML" className="w-[48px]" />
              <p className="mx-1 font-semibold">HTML</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.09}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={Css} alt="Css" className="w-[48px]" />
              <p className="mx-1 font-semibold">CSS</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.05}
            factorY={0.1}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={JavaScript} alt="JavaScript" className="w-[48px]" />
              <p className="mx-1 font-semibold">JavaScript</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={sass} alt="Sass" className="w-[48px]" />
              <p className="mx-1 font-semibold">Sass</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.04}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={bootstrap} alt="Bootstrap" className="w-[48px]" />
              <p className="mx-1 font-semibold">Bootstrap</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.02}
            factorY={0.08}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={tailwind} alt="Tailwind CSS" className="w-[48px]" />
              <p className="mx-1 font-semibold">Tailwind CSS</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.03}
            factorY={0.07}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={rwd} alt="RWD" className="w-[48px]" />
              <p className="mx-1 font-semibold">RWD</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.08}
            factorY={0.08}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={npm} alt="Node Package Manager" className="w-[48px]" />
              <p className="mx-1 font-semibold">NPM</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.07}
            factorY={0.09}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={react} alt="React" className="w-[48px]" />
              <p className="mx-1 font-semibold">React</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.01}
            factorY={0.04}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={redux} alt="React-Redux" className="w-[48px]" />
              <p className="mx-1 font-semibold">React-Redux</p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild 
            factorX={0.05}
            factorY={0.06}
            className="m-2"
          >
            <div className="shadow-md rounded-md p-1 bg-gray-100 flex items-center transition duration-300 grayscale hover:grayscale-0">
              <img src={gatsby} alt="Gatsby" className="w-[48px]" />
              <p className="mx-1 font-semibold">Gatsby</p>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </div>
  )
}

export default Skills