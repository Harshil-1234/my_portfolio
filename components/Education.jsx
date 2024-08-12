"use client";
// pages/index.jsx
import Image from 'next/image';
import { Fragment } from 'react';

// Experience data

const Timeline = ({education}) =>{
    return(
        <div className='flex flex-col gap-y-3 w-full my-4 pt-20'>
            <Circle />
            
            {education.map((exp,key)=>{
                return <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                        {exp.id%2 === 1 ? (
                            <Education 
                                name={exp.name} 
                                descp={exp.descp}
                                type = {exp.type}
                                duration = {exp.duration}
                            />
                        ) : (
                            <div></div>
                        )}

                        <Pillar />

                        {exp.id%2 === 0 ? (
                            <Education 
                                name={exp.name} 
                                descp={exp.descp}
                                type = {exp.type}
                                duration = {exp.duration}
                            />
                        ) : (
                            <div></div>
                        )}

                    </div>

                    {key < (education.length-1) && <Circle />}
                </Fragment>
            })}

            <Circle />
        </div>
    )
}
const Circle = () =>{
    return(
        <div className='bg-gradient-to-r from-blue-500 to-fuchsia-500 rounded-full w-4 h-4 bg-blue-500 mx-auto'>
            
        </div>
    )
}

const Pillar = () =>{
    return(
        <div className='bg-gradient-to-b from-blue-500 to-fuchsia-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto'>
            
        </div>
    )
}

const Education = ({name,type,duration,descp}) => {
  return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_4px_6px_rgba(255,255,255,0.5)] flex flex-col gap-y-2 border shadow-md rounded-xl p-4 bg-slate-600 h-full w-[500px]'>
            <div className=' text-[20px] font-extrabold text-white'>
                {name}
            </div>

            <div className='flex justify-between border-b'>
                <div className='text-sm font-semibold text-accent'>
                    {type}
                </div>
                <div className='text-sm font-semibold'>
                    {duration}
                </div>
            </div>

            <div className='text-sm text-gray-200 whitespace-pre-line pt-2'>
                {descp}
            </div>
    </div>
  );
}
export default Timeline