export default function Item({children}: {children: React.ReactNode}) {
    return (
        <li className="flex bg-custom-light dark:bg-bg-dark items-center gap-8 shadow-(--box-shadow-custom-3) rounded-xl p-4 min-w-[30vw]">
            <div className="min-w-4 min-h-4 bg-indigo-500 rounded-full"/>
            <span className="text-xl text-black dark:text-white">{children}</span>
        </li>
    )
}