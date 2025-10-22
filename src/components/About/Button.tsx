export default function Button({children}: {children: React.ReactNode}) {
    return (
        <a className="flex w-35 h-10 shadow-(--box-shadow-custom-black) rounded-xl mt-10 p-2 items-center justify-center" href='#contacts'>{children}</a>
    )
}