"use client";
import { FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs,SiShadcnui,SiFlask,SiSpringboot, SiDjango, SiMysql, SiMongodb, SiPostgresql, SiTensorflow, SiPandas, SiNumpy, SiNodedotjs, SiCplusplus, SiJavascript, SiC, SiGit, SiGithub, SiVercel, SiScikitlearn, SiPycharm, SiGooglecolab } from 'react-icons/si';

const Technologies = () => {
  return (
    <>
        {/* List of all the technologies I have worked with */}
        <section className="">
            {/* <h2 className="text-[40px] pb-8">
            Technologies I have worked on
            </h2> */}

            {/* Listing down all the tech I know */}
            <span className="flex flex-col space-y-7">
            {/* DIV FOR FRONTNEND TECHS */}
            <div className='flex flex-col items-center gap-3 md:p-2 xl:p-2 md:flex-row xl:flex-row'>
                <span className="text-2xl mr-4">Frontend:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-[4.6rem] xl:pl-[4.6rem]">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <FaReact className="text-blue-500 text-xl"/>
                        <span className="text-lg">ReactJS</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiNextdotjs className="text-white text-xl"/>
                        <span className="text-lg">NextJS</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiTailwindcss className="text-blue-500 text-xl"/>
                        <span className="text-lg">TailwindCSS</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiShadcnui className="text-white-500 text-xl"/>
                        <span className="text-lg">ShadCN</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR BACKEND TECHS */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl mr-4">Backend:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-[5.4rem] xl:pl-[5.4rem]">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiDjango className="text-blue-500 text-xl"/>
                        <span className="text-lg">Django</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiSpringboot className="text-green-500 text-xl"/>
                        <span className="text-lg">SpringBoot</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiFlask className="text-white-500 text-xl"/>
                        <span className="text-lg">Flask</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiNodedotjs className="text-green-500 text-xl"/>
                        <span className="text-lg">NodeJS</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR Databases */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl">Databases:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-[4.7rem] xl:pl-[4.7rem]">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiMysql className="text-blue-500 text-3xl"/>
                        <span className="text-lg">MYSQL</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiPostgresql className="text-blue-500 text-xl"/>
                        <span className="text-lg">PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiMongodb className="text-green-500 text-xl"/>
                        <span className="text-lg">MongoDB</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR Programming */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl w-1/7">Programming:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-12 xl:pl-12">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiCplusplus className="text-blue-500 text-xl"/>
                        <span className="text-lg">C++</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <FaJava className="text-red-500 text-xl"/>
                        <span className="text-lg">Java</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <FaPython className="text-500 text-xl"/>
                        <span className="text-lg">Python</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiJavascript className="text-yellow-500 text-xl"/>
                        <span className="text-lg">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiC className="text-blue-500 text-xl"/>
                        <span className="text-lg">C</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR Version Control */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl w-1/7">Version Control:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-1 xl:pl-1">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiGit className="text-red-500 text-xl"/>
                        <span className="text-lg">Git</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiGithub className="text-black-500 text-xl"/>
                        <span className="text-lg">GitHub</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR Deployment */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl w-1/7">Deployment:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-16 xl:pl-16">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiVercel className="text-white text-xl"/>
                        <span className="text-lg">Vercel</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <span className="text-lg">Render</span>
                    </div>
                </span>
            </div>
            {/* DIV FOR other */}
            <div className='flex flex-col md:flex-row xl:flex-row items-center gap-3 p-2'>
                <span className="text-2xl">Other:</span> {/* w-1/3 lg:w-1/5 */}
                <span className="flex w-2/3 flex-wrap items-center gap-4 lg:w-4/5 md:pl-[8.5rem] xl:pl-[8.5rem]">
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiTensorflow className="text-orange-500 text-xl"/>
                        <span className="text-lg">TensorFlow</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiScikitlearn className="text-white text-xl"/>
                        <span className="text-lg">SckitiLearn</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiPycharm className="text-white text-xl"/>
                        <span className="text-lg">PyCharm</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiGooglecolab className="text-orange-500 text-xl"/>
                        <span className="text-lg">Google Colab</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiNumpy className="text-blue-500 text-xl"/>
                        <span className="text-lg">Numpy</span>
                    </div>
                    <div className="flex items-center gap-1 p-1 border rounded-md shadow-md">
                        <SiPandas className="text-white-500 text-xl"/>
                        <span className="text-lg">Pandas</span>
                    </div>
                </span>
            </div>
            </span>
        </section>
    </>
  )
}

export default Technologies