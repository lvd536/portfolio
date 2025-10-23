export default function Button({children}: {children: React.ReactNode}) {
    return (
        <a className="flex w-35 h-10 shadow-(--box-shadow-custom-2) rounded-xl mt-10 p-2 items-center justify-center text-black dark:text-white" href='#contacts'>{children}</a>
    )
}