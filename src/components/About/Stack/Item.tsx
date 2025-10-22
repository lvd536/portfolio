export default function Item({size, image} : {size : React.ReactNode, image : string}) {
    return (
        <li className="h-14 inline-flex shadow-[0_0px_20px_rgba(0,0,0,.8)] rounded-full p-2 justify-center items-center">
            <img className={`w-${size} h-${size}`} src={image} alt="skills image"/>
        </li>
    )
}