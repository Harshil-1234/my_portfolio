"use client";
// pages/index.jsx
import Image from 'next/image';
import { Fragment } from 'react';

// Experience data

const Timeline = ({experiences}) =>{
    return(
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Circle />
            
            {experiences.map((exp,key)=>{
                return <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {exp.id%2 === 1 ? (
                            <Experience 
                                company={exp.company} 
                                description={exp.description}
                                role = {exp.role}
                                duration = {exp.duration}
                            />
                        ) : (
                            <div></div>
                        )}

                        <Pillar />

                        {exp.id%2 === 0 ? (
                            <Experience 
                                company={exp.company} 
                                description={exp.description}
                                role = {exp.role}
                                duration = {exp.duration}
                            />
                        ) : (
                            <div></div>
                        )}

                    </div>

                    {key < (experiences.length-1) && <Circle />}
                </Fragment>
            })}

            <Circle />
        </div>
    )
}
const Circle = () =>{
    return(
        <div className='bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full w-4 h-4 bg-blue-500 mx-auto hidden md:block xl:block'>
            
        </div>
    )
}

const Pillar = () =>{
    return(
        <div className='bg-gradient-to-b from-blue-500 to-fuchsia-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto hidden md:block xl:block'>
            
        </div>
    )
}

const Experience = ({company,description,role,duration}) => {
  return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(255,255,255,0.5)] flex flex-col gap-y-2 border shadow-md rounded-xl p-4 h-full w-full md:w-auto xl:w-auto bg-[#27272c]'>
            <div className=' text-[30px] font-extrabold text-white'>
                {company}
            </div>

            <div className='flex justify-between border-b'>
                <div className='text-md font-semibold text-accent'>
                    {role}
                </div>
                <div>
                    {duration}
                </div>
            </div>

            <div className='text-sm text-gray-200 whitespace-pre-line pt-2'>
                {description}
            </div>
    </div>
  );
}
export default Timeline