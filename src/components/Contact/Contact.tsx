import github from '../../assets/contact/github.svg'
import telegram from '../../assets/langs/telegram.svg'

import Skill from "../Skill.tsx";

export default function Contact() {
    return (
        <section id="contacts">
            <div className="shadow-(--box-shadow-custom) w-full flex flex-col gap-8 relative rounded-4xl px-8 py-12 my-15" id="contact">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-4xl">Do you want to ask</span>
                        <span className="text-indigo-500 text-4xl">something interesting?</span>
                    </div>
                    <ul className="flex gap-5">
                        <a href="https://github.com/lvd536">
                            <Skill image={github}/>
                        </a>
                        <a href="https://t.me/lvdshka">
                            <Skill image={telegram}/>
                        </a>
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-s">Contact me. I am online mon-fri from 8 am to 8 pm (gmt).</span>
                    <span className="text-s">© lvd. 2025</span>
                </div>
            </div>
        </section>
    )
}