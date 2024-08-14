import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import OpenResumeButton from "@/components/OpenResumeButon";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I'm <br /> 
              <span className="text-accent">Harshil Bansal</span>
            </h1>
            <span className="text-xl">Software Developer based in Delhi,India</span>

            <p className="max-w-[500px] mb-9 text-white/80">
              {/* <Button variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2 justify-center"> */}
                <Link 
                  href="/aboutme"
                  className="text-white text-center font-medium hover:text-accent transition-all flex items-center justify-center pt-6 pb-4"
                >
                    <span className="border-b-2 border-accent">Know More About Me</span>
                </Link>
              {/* </Button> */}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button> */}

              <OpenResumeButton />
 
              <div className="mb-8 xl:mb-0 ">
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                   text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>



          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export const metadata = {
  title:"Harshil Bansal - Portfolio",
  icons: {
    icon: "assets/new_logo_.png", // Path to your favicon
  },
};

export default page
