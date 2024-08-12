import Link from "next/link"
import {FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import { TbMailFilled } from "react-icons/tb";

const socials = [
    {icons: <FaGithub/>, path:"https://github.com/Harshil-1234"},
    {icons: <FaLinkedin/>, path:"https://www.linkedin.com/in/harshil-bansal-161949220/"},
    {icons: <FaTwitter/>, path:"https://x.com/HarshilBansal13"},
    {icons: <TbMailFilled/>, path:"mailto:harshilbansal18@gmail.com"},
];

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icons}
            </Link>
        })}
    </div>
  )
}

export default Socials