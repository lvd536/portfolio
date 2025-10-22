export default function DateItem({children}: {children: React.ReactNode}) {
    return (
        <li className="flex items-center gap-8 shadow-[0_0px_20px_rgba(200,200,200,.15)] rounded-xl p-4 min-w-[30vw]">
            <div className="min-w-4 min-h-4 bg-indigo-500 rounded-full"/>
            <span className="text-xl">{children}</span>
        </li>
    )
}