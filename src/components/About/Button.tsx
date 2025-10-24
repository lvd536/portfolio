export default function Button({children}: {children: React.ReactNode}) {
    return (
        <a className="flex w-35 h-10 shadow-(--box-shadow-custom-2) rounded-xl mt-10 p-2 items-center justify-center text-black dark:text-white hover:ring-1 ring-indigo-500 transition-borders duration-400" href='#contacts'>{children}</a>
    )
}
