import * as langs from '../../assets/langs/index.ts'
import Skill from "../Skill.tsx";

export default function Stack() {
    return (
        <ul className="hidden lg:grid grid-cols-5 gap-5">
            <Skill image={langs.csharp}/>
            <Skill image={langs.css}/>
            <Skill image={langs.scss}/>
            <Skill image={langs.html}/>
            <Skill image={langs.javascript}/>
            <Skill image={langs.typescript}/>
            <Skill image={langs.react}/>
            <Skill image={langs.zustand}/>
            <Skill image={langs.telegram}/>
            <Skill image={langs.database}/>
        </ul>
    )
}