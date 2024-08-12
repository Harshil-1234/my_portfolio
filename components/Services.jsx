"user client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs';

const services = [
    {
        num:'01',
        title:'Machine Learning',
        description:"Development of machine learning models with high precision and accuracy."
    },
    {
        num:'02',
        title:'Web Designing',
        description:"The most modern and high-quality design made at a professional level."
    },
    {
        num:'03',
        title:'Web Development',
        description:"High-quality development of sites at the professional level."
    },
    {
        num:'04',
        title:'CyberSecurity',
        description:"Proficient in identifying, analyzing, and mitigating security threats to safeguard digital assets and ensure robust defense against cyber attacks."
    },
    {
        num:'05',
        title:'Competitive Programming',
        description:"I focus on developing efficient algorithms and data structures to solve complex problems."
    },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1,
                transition:{delay:2.4,duration:0.4,ease:"easeIn"}
            }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
                {
                    services.map((service,index)=>{
                        return (<div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                    {/* top */}
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                                            {service.title}
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-90'>
                                            <BsArrowDownRight className='text-primary text-3xl'/>
                                        </div>
                                    </div>

                                    <p className='text-white/80 mb-4 text-justify'>
                                        {service.description}
                                    </p>

                                    {/* border */}
                                    <div className='border-b border-white/30 w-full'></div>
                                </div>);
                    })
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Services