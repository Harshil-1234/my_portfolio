"use client";
import Projects from "@/components/Projects";
import { projectData } from '@/lib/constant';
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div className='min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0 mb-40'
      initial={{opacity:0}}
      animate={{opacity:1,
        transition:{
          delay:1,
          duration:0.4,
          ease:"easeIn"
        },
      }}
    >
      <div className="container mx-auto pb-10">
        <Projects projectData={projectData} />
      </div>
    </motion.div>
  )
}

export default page