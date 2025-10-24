import Skill from "../Skill.tsx";

export default function PortfolioCard({header, dateTime, dateString, description, skills, projectImage}: {
    header: string,
    dateTime: string,
    dateString: string,
    description: string,
    skills: string[],
    projectImage: string
}) {
    return (
        <div className="flex flex-col lg:flex-row bg-custom-light dark:bg-bg-dark gap-[10vw] mt-10 transition-shadow duration-300 shadow-(--box-shadow-custom-2) hover:shadow-(--box-shadow-custom-hover) rounded-xl p-10 animate-custom-bounceY">
            <img src={projectImage} alt="" className="w-full lg:max-w-100 max-h-100 rounded-lg"/>
            <div className="flex flex-col w-full gap-8">
                <time className="w-fit text-indigo-500 font-medium shadow-(--box-shadow-inset) rounded-2xl p-2 px-5" dateTime={dateTime}>{dateString}</time>
                <span className="text-4xl text-black dark:text-white">{header}</span>
                <span className="text-black dark:text-white">{description}</span>
                <ul className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <Skill key={index} image={skill}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}