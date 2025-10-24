export default function NavButton({children, section}: {children: React.ReactNode, section: string}) {
    return (
        <>
            <a href={`#${section}`} className="text-black dark:text-white transition-color duration-300 hover:text-indigo-500">{children}</a>
        </>
    )
}