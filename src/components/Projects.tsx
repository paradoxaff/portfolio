import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
{
    id:1,
    title:"Static Interactive Resume",
    desc:"A typescript based interactive resume built with html css and node.js",
    img:"/image.png (2).png",
    tags:["HTML,CSS,Node.js,Typescript"],
},
{
  id: 2,
  title: "Weather Widget",
  desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
  img: "/project_03.png",
  tags: ["Next.JS", "Node", "CSS", "Typescript"],
},
{
  id: 3,
  title: "Simple Calculator App",
  desc: "A basic HTML and TypeScript calculator for performing essential arithmetic operations.",
  img: "/project_06.png",
  tags: ["HTML", "Node", "CSS", "Typescript"],
},
];

const Project = () => {
  return (
    <div id="project" className='container pt-32'>
        <Heading title='My project' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />))}
    </div>
    </div>
  )
}

export default Project
