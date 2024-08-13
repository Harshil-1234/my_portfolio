"use client";
import Projects from "@/components/Projects";
import { projectData } from '@/lib/constant';

const page = () => {
  return (
    <div className="container mx-auto pb-10">
      <Projects projectData={projectData} />
    </div>
  )
}

export default page