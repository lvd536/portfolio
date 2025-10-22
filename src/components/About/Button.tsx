export default function Button({children}: {children: React.ReactNode}) {
    return (
        <button className="w-30 h-10 shadow-(--box-shadow-custom-black) rounded-xl mt-10">{children}</button>
    )
}