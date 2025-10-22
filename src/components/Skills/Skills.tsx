import SkillCard from "./SkillCard.tsx";
import Item from "./Item.tsx";

export default function Skills() {
    return (
        <div className="flex justify-between gap-[5vw]">
           <SkillCard header="Hard">
               <Item>HTML (HTML5), JSX</Item>
               <Item>CSS (CSS3), SASS (SCSS), Tailwind, Animations</Item>
               <Item>JavaScript (ES6+, OOP), TypeScript</Item>
               <Item>React</Item>
               <Item>Zustand</Item>
               <Item>BEM</Item>
               <Item>Git (GitHub, BitBucket, GitLab)</Item>
               <Item>Vite</Item>

           </SkillCard>
            <SkillCard header="Soft">
                <Item>I am responsible about deadlines</Item>
                <Item>I am attentive to the details of the terms of reference</Item>
                <Item>I have time management skills</Item>
                <Item>I am motivated to improve my skills, constantly studying new technologies in my field of activity</Item>
            </SkillCard>
        </div>
    )
}