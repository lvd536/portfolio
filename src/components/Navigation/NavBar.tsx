import NavButton from "./NavButton.tsx";
import Logo from "./Logo.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

export default function NavBar() {
    return (
        <div className="flex items-center justify-between">
            <Logo/>
            <div className="flex gap-10">
                <NavButton>About</NavButton>
                <NavButton>Skills</NavButton>
                <NavButton>Portfolio</NavButton>
                <NavButton>Contacts</NavButton>
            </div>
            <ThemeToggle/>
        </div>
    )
}