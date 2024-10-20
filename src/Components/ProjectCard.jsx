

import React from 'react'

const ProjectCard=({ project })=> {
    return (
        <div
            className='flex flex-col animate-topToBottomSlide w-[18rem] h-[34rem] text-white rounded-lg border border-white p-1'
        >
            <img src={project.image} className='w-full  h-[10rem] rounded-lg bg-black ' />
            <div className='p-5 flex flex-col gap-6 border-t'>
                <p className='text-[1.4rem] font-semibold'>{project.title}</p>
                <p className='text-[0.8rem]'>{project.description}</p>
            </div>
            <div className='flex flex-row flex-wrap gap-2 px-5'>
                {
                    project.skills.map((skill) => {
                        return (
                            <p key={skill.label} className='rounded-xl text-[0.9rem] text-blue-700 font-semibold bg-white px-2  py-1' >{skill}</p>
                        )
                    })
                }
            </div>

            <a  className="pt-3 pl-3 text-blue-700 hover:text-blue-900"href={project.projectLink}>  {project.projectLink}</a>
        </div>
    )
}
export default ProjectCard;