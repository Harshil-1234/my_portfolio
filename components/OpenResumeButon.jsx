import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa6";
import { Button } from "./ui/button";

const OpenResumeButton = () => {
  return (
    <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
      <Button 
        variant="outline" 
        size="lg" 
        className="uppercase flex items-center gap-2">
        <FaFilePdf className="text-xl"/>
        <span>Download Resume</span>
        {/* <FiDownload className="text-xl"/> */}
      </Button>
    </Link>
  );
};

export default OpenResumeButton;
