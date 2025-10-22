export default function Skill({size, image} : {size : number, image : string}) {
    return (
        <li className={`w-14 h-14 inline-flex shadow-(--box-shadow-date) rounded-full p-2 justify-center items-center`}>
            <img className={`w-${size} h-${size}`} src={image} alt="skills image"/>
        </li>
    )
}