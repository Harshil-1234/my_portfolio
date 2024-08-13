import Link from "next/link"
import { Button } from "./ui/button"

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Image from "next/image"
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <Image 
                    // src="/assets/photo.webp" 
                    src="/assets/new_logo_.png" 
                    priority 
                    quality={100} 
                    // fill 
                    width={70}
                    height={70}
                    alt="" 
                    className="object-contain"
                />
                {/* <h1 className="text-4xl font-semibold">
                    Harshil
                </h1> */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                {/* <Link href="/contact">
                    <Button>Contact</Button>
                </Link> */}
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header