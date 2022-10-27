import React from 'react'
import Title from './title'
import { StaticImage } from 'gatsby-plugin-image'
import Tilt from 'react-tilt'
import Shape from '../images/blobanimation.svg'

const About = () => {
  return (
    <div className="text-center mt-[8rem] mb-[2rem]">
      <Title title="O Mnie" subtitle="Czyli kilka słów na temat mojej osoby" />
      <div className="flex flex-col items-center lg:flex-row lg:justify-around mt-[6rem]">
        <div className="mb-[1rem] lg:mb-0">
          <Tilt className="Tilt" options={{ max: 10, scale: 1, speed: 800, perspective: 2000 }} style={{ maxWidth: 300 }} >
            <div className="relative">
              <div className="absolute about__dots top-[-36px] left-[-36px] right-[30px] bottom-[30px]" />
              <StaticImage 
                src="../images/52390268319_6ec587a83b_o.jpg" 
                alt="Me" 
                className="shadow-md rounded-md w-full max-w-[300px]" 
              />
            </div>
          </Tilt>
        </div>
        <div className="max-w-[500px] relative">
          <img src={Shape} className="absolute top-[-60px] left-0 right-0 bottom-0 text-blue-600 opacity-10 inline-block w-[1200px]" />
          <h4 className="font-semibold mb-2 text-lg">Lorem ipsum dolor sit amet?</h4>
          <p className="text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
      </div>
    </div>
  )
}

export default About