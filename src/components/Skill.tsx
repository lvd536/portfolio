export default function Skill({image} : {image : string}) {
    return (
        <li className={`w-14 h-14 inline-flex shadow-(--box-shadow-inset) rounded-full p-2 justify-center items-center`}>
            <img className={`w-8 h-8`} src={image} alt="skills image"/>
        </li>
    )
}