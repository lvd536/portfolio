import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

export default function ThemeToggle() {
    return (
        <>
            <div className="flex relative items-center justify-between bg-black/50 rounded-full w-22.5 h-11.5">
                <button className="bg-white w-11.5 h-11.5 flex items-center justify-center relative rounded-full">
                    <img src={moon} alt="Dark Mode" className="flex w-5 h-5 absolute"/>
                </button>
                <button className="w-11.5 h-11.5 flex items-center justify-center relative rounded-full">
                    <img src={sun} alt="Light Mode" className="flex w-5 h-5 absolute"/>
                </button>
            </div>
        </>
    )
}