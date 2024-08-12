"use client";

import React from "react";
import Technologies from '@/components/Technologies';
import { ScrollArea } from '@/components/ui/scroll-area';
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {experiences,education} from '@/lib/constant'

const Resume = () => {
  return (
    <motion.div className='min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0 mb-40'
      initial={{opacity:0}}
      animate={{opacity:1,
        transition:{
          delay:0.6,
          duration:0.4,
          ease:"easeIn"
        },
      }}
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex-col xl:flex-row gap-[60px] items-center justify-center'>
          <TabsList className='flex flex-col justify-center items-center xl:gap-6 gap-2 xl:flex-row'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            {/* <TabsTrigger value="skills">Skills</TabsTrigger> */}
          </TabsList>

          {/*content */}
          <div className='min-h-[70vh] w-full mt-6'>
            <TabsContent value="experience" className="w-full flex-col items-center justify-center">
              <div className='flex flex-col gap-[30px] text-center items-center justify-center pt-8 pb-10 xl:text-left'>
                <h3 className='text-3xl font-bold'>
                  Experience
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  What experience I've gained over the years
                </p>
              </div>
              <Experience experiences={experiences}/>
              
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <Education education={education}/>
            </TabsContent>

            <TabsContent value="technologies" className="w-full flex-col items-center justify-center">
              <div className="pt-16 container mx-auto" style={{ paddingLeft: "12rem" }}>
                <Technologies />
              </div>
            </TabsContent>

            {/* <TabsContent value="skills" className="w-full">

            </TabsContent> */}

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume