import NavButton from "./NavButton.tsx";
import Logo from "./Logo.tsx";
import ThemeToggle from "./ThemeToggle.tsx";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        })
    })
    return (
        <div className={`fixed z-2  w-full left-0 ${isScrolled ? 'pt-0' : 'pt-5'} ${isScrolled && 'bg-bg dark:bg-bg-dark shadow-lg shadow-black/50 transition-shadow transition-padding duration-600'}`}>
            <div className={`flex items-center justify-between container mx-auto`}>
                <Logo/>
                <div className="flex gap-10">
                    <NavButton section={'about'}>About</NavButton>
                    <NavButton section={'skills'}>Skills</NavButton>
                    <NavButton section={'portfolio'}>Portfolio</NavButton>
                    <NavButton section={'contacts'}>Contacts</NavButton>
                </div>
                <ThemeToggle/>
            </div>
        </div>
    )
}