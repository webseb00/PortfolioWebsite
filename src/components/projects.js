import React from 'react'
import Title from './title'
import { StaticImage } from 'gatsby-plugin-image'
import { FaRegEye } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'

const Projects = () => {
  return (
    <div className="mt-[8rem] mb-[2rem]">
      <Title
        title="Projekty"
        subtitle="Moje dotychczasowe projekty"
      />
      <div className="my-[3rem]">
        <div className="mx-auto max-w-[95%] md:max-w-[80%] bg-neutral-200 p-6 shadow-md border-b-[3px] border-blue-600">
          <div className="flex flex-col text-center lg:text-left lg:flex-row items-center">
            <StaticImage src="../images/recipe-app.png" alt="" className="w-full max-w-[400px]" />
            <div className="lg:ml-10">
              <h3 className="font-semibold text-2xl">Recipe App</h3>
              <ul className="flex flex-wrap my-[2.5rem] font-robotoMono">
                <li className="mr-2 mb-2 px-4 py-1 rounded-md shadow-md bg-slate-700 text-white transition duration-300 hover:bg-slate-500">HTML</li>
                <li className="mr-2 mb-2 px-4 py-1 rounded-md shadow-md bg-slate-700 text-white transition duration-300 hover:bg-slate-500">CSS</li>
                <li className="mr-2 mb-2 px-4 py-1 rounded-md shadow-md bg-slate-700 text-white transition duration-300 hover:bg-slate-500">JavaScript</li>
                <li className="mr-2 mb-2 px-4 py-1 rounded-md shadow-md bg-slate-700 text-white transition duration-300 hover:bg-slate-500">Webpack</li>
                <li className="mr-2 mb-2 px-4 py-1 rounded-md shadow-md bg-slate-700 text-white transition duration-300 hover:bg-slate-500">MVC</li>
              </ul>
              <div className="flex flex-wrap justify-center lg:justify-start">
                <a 
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2.5 mr-2 transition duration-300"
                  target="_blank"
                >
                  <FaRegEye className="mr-2 text-xl inline-block" />
                  Live Link
                </a>
                <a 
                  href="#"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2.5 transition duration-300"
                  target="_blank"
                >
                  <BsCodeSlash className="mr-2 text-xl inline-block" />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects