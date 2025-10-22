export default function Button({children}: {children: React.ReactNode}) {
    return (
        <button className="w-30 h-10 shadow-[0_0px_20px_rgba(0,0,0,.8)] rounded-xl mt-10">{children}</button>
    )
}