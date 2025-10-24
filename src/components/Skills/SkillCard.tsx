import Header from "../Header.tsx";

export default function SkillCard({header, children} : {header: string, children: React.ReactNode}) {
    return (
        <div>
            <Header word1={header} word2={'skills'}/>
            <ul className="flex flex-col gap-6 animate-custom-bounceX-alternative">
                {children}
            </ul>
        </div>
    )
}