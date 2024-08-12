"use client";
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import { motion } from 'framer-motion';



const AboutMe = () => {
  return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1,
            transition:{delay:2,duration:0.4,ease:"easeIn"},
        }}
    >
      <section>

        <div className="container mx-auto">
          {/* Title of the page */}
          
            <h1 className="h1 relative inline-block">
              About Me
              <span className="block w-1/2 h-[5px] bg-accent mt-2 rounded-full"></span>
            </h1>
        

          {/* Content for the About Me section */}
          <section className="pt-8">
            <div className="text-white/80">
              <p className="mb-4 text-justify">
                I'm a passionate full stack developer and tech enthusiast from New Delhi, India, 
                currently pursuing a B.Tech in Information Technology at GGSIPU with a focus on Machine Learning. 
                With a solid academic foundation, including a <span className="text-accent">CGPA of 9.15</span>, I blend hands-on experience in web 
                development, machine learning, and innovative projects to create software solutions that are 
                functional, efficient, and user-friendly.
              </p>

              <p className="mb-4 text-justify">
                Currently, I'm honing my skills in data structures, algorithms, and cybersecurity, aiming to 
                integrate these into my development work seamlessly.In my downtime, I enjoy gaming, playing different kinds of sports, indulging in good food, and finding inspiration in music while working on projects. 
              </p>

              <p className="text-justify">
                In addition to my studies and personal projects, I am working as a freelancer, 
                actively seeking new opportunities and orders.If you have a vision in mind or need assistance with development,feel free to reach out. Let's create something amazing together!
              </p>
            </div>
          </section>

          {/* <Technologies /> */}
          <h2 className='h2 pt-14 pb-16'>
            What I'm Doing:
            <span className="block w-1/6 h-[5px] bg-accent mt-2 rounded-full"></span>
          </h2>
          <Services />

        </div>
      </section>
    </motion.div>
  )
}

export default AboutMe