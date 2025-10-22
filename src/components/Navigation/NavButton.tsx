export default function NavButton({children, section}: {children: React.ReactNode, section: string}) {
    return (
        <>
            <a href={`#${section}`}>{children}</a>
        </>
    )
}