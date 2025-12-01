import * as langs from "../../assets/langs/index.ts";
import * as portfolioImages from "../../assets/portfolio/index.ts";

import PortfolioCard from "./PortfolioCard.tsx";
import Header from "../Header.tsx";
import Modal from "./Modal/Modal.tsx";
import type { IPortfolioCard } from "./PortfolioCard.tsx";
import { useIsModal } from "../../store/useModalStore.tsx";

export default function Portfolio() {
    const isModal = useIsModal();
    const portfolioProjects: IPortfolioCard[] = [
        {
            skills: [
                langs.html,
                langs.css,
                langs.tailwind,
                langs.typescript,
                langs.javascript,
                langs.react,
                langs.database,
                langs.zustand,
            ],
            header: "Portfolio",
            dateTime: "2025-10",
            dateString: "October 2025",
            description:
                "Minimalistic portfolio based on SPA with integration of several technologies: Vite, TypeScript, React, Html. CSS, Tailwind 4, Zustand etc.",
            projectImage: portfolioImages.portfolio,
        },
        {
            skills: [
                langs.html,
                langs.css,
                langs.tailwind,
                langs.typescript,
                langs.javascript,
                langs.react,
                langs.database,
                langs.zustand,
            ],
            header: "Hamster Combat Clone",
            dateTime: "2025-09",
            dateString: "September 2025",
            description:
                "Hamster Combat V1 Telegram WebApp clone with integration of several technologies: Vite, TypeScript, React, Html. CSS, SCSS, Zustand, Supabase etc.",
            projectImage: portfolioImages.shovel,
        },
        {
            skills: [
                langs.html,
                langs.css,
                langs.tailwind,
                langs.typescript,
                langs.javascript,
                langs.react,
                langs.database,
                langs.zustand,
            ],
            header: "To-Do List",
            dateTime: "2025-10",
            dateString: "October 2025",
            description:
                "Minimalistic todo list app based on SPA with integration of several technologies: Vite, TypeScript, React, Html. CSS, Tailwind 4, Zustand etc.",
            projectImage: portfolioImages.todoList,
        },
        {
            skills: [
                langs.html,
                langs.css,
                langs.tailwind,
                langs.typescript,
                langs.javascript,
                langs.react,
                langs.database,
                langs.zustand,
                langs.router,
            ],
            header: "Maybe Learn",
            dateTime: "2025-11",
            dateString: "November 2025",
            description:
                "MaybeLearn is an educational platform built using modern web technologies. It offers the ability to create and complete courses and quizzes, and includes an admin panel for content and user management with integration of several technologies: TypeScript, React, Tailwind 4, React Router,  Zustand etc.",
            projectImage: portfolioImages.maybeLearn,
        },
    ];
    return (
        <section id="portfolio" className="mt-25">
            <Header word1={"My"} word2={"portfolio"} />
            {portfolioProjects.map((portfolio, index) => {
                return (
                    <PortfolioCard portfolioDetails={portfolio} key={index} />
                );
            })}
            {isModal && <Modal />}
        </section>
    );
}
