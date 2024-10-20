
import React from "react";
import {PROJECTS} from './Constants'
import ProjectCard from './ProjectCard'

const Projects=()=> {
    return (
        <div className='px-10 w-full transition-all animate-fadeIn text-white pt-[2rem] max-sm:pt-0 flex flex-col max-md:px-5'>
            <p className='text-[3.5rem] font-bold'>
                <span className='text-[3rem] font-bold  border-b-8 border-blue-700'>Projects</span>
            </p>

            <div className='flex flex-row flex-wrap w-full justify-center gap-24 items-center mt-10'>

            {
                    PROJECTS.map((project) => {
                        return (
                            <ProjectCard project={project} />
                        )
                    })
                }
            </div>
        </div>

    )
}
export default Projects