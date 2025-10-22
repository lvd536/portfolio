export default function SkillCard({header, children} : {header: string, children: React.ReactNode}) {
    return (
        <div>
            <div className="flex gap-2 text-4xl mb-5">
                <span className="text-indigo-500">{header}</span>
                <span>skills</span>
            </div>
            <ul className="flex flex-col gap-6">
                {children}
            </ul>
        </div>
    )
}