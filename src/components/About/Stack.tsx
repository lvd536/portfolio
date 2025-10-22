import csharp from '../../assets/langs/csharp.svg'
import css from '../../assets/langs/css.svg'
import html from '../../assets/langs/html.svg'
import typescript from '../../assets/langs/typescript.svg'
import javascript from '../../assets/langs/javascript.svg'
import scss from '../../assets/langs/scss.svg'
import zustand from '../../assets/langs/zustand.svg'
import telegram from '../../assets/langs/telegram.svg'
import react from '../../assets/langs/react.svg'
import database from '../../assets/langs/database.svg'
import Skill from "../Skill.tsx";

export default function Stack() {
    return (
        <ul className="grid grid-cols-5 gap-5">
            <Skill image={csharp}/>
            <Skill image={css}/>
            <Skill image={scss}/>
            <Skill image={html}/>
            <Skill image={javascript}/>
            <Skill image={typescript}/>
            <Skill image={react}/>
            <Skill image={zustand}/>
            <Skill image={telegram}/>
            <Skill image={database}/>
        </ul>
    )
}