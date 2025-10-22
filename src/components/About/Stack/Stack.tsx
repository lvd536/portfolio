import csharp from '../../../assets/langs/csharp.svg'
import css from '../../../assets/langs/css.svg'
import html from '../../../assets/langs/html.svg'
import typescript from '../../../assets/langs/typescript.svg'
import javascript from '../../../assets/langs/javascript.svg'
import scss from '../../../assets/langs/scss.svg'
import zustand from '../../../assets/langs/zustand.svg'
import telegram from '../../../assets/langs/telegram.svg'
import react from '../../../assets/langs/react.svg'
import database from '../../../assets/langs/database.svg'
import Item from "./Item.tsx";

export default function Stack() {
    return (
        <ul className="grid grid-cols-5 gap-5">
            <Item image={csharp} size={10}/>
            <Item image={css} size={10}/>
            <Item image={scss} size={10}/>
            <Item image={html} size={10}/>
            <Item image={javascript} size={8}/>
            <Item image={typescript} size={8}/>
            <Item image={react} size={10}/>
            <Item image={zustand} size={10}/>
            <Item image={telegram} size={10}/>
            <Item image={database} size={8}/>
        </ul>
    )
}