import * as langs from '../../assets/langs/index.ts'
import * as portfolioImages from '../../assets/portfolio/index.ts'

import PortfolioCard from "./PortfolioCard.tsx";
import Header from "../Header.tsx";
import Modal from './Modal/Modal.tsx'
import { useIsModal } from '../../store/useModalStore.tsx'

export default function Portfolio() {
    const isModal = useIsModal()
    return (
        <section id="portfolio" className="mt-25">
            <Header word1={'My'} word2={'portfolio'}/>
            <PortfolioCard
                skills={[langs.html, langs.css, langs.tailwind, langs.typescript, langs.javascript, langs.react, langs.database, langs.zustand]}
                header='Portfolio'
                dateTime='2025-10'
                dateString='October 2025'
                description='Minimalistic portfolio based on SPA with integration of several technologies: Vite, TypeScript, React, Html. CSS, Tailwind 4, Zustand etc.'
                projectImage={portfolioImages.portfolio}
            />
            <PortfolioCard
                skills={[langs.html, langs.css, langs.scss, langs.typescript, langs.javascript, langs.react, langs.database, langs.zustand, langs.telegram]}
                header='Hamster Combat Clone'
                dateTime='2025-09'
                dateString='September 2025'
                description='Hamster Combat V1 Telegram WebApp clone with integration of several technologies: Vite, TypeScript, React, Html. CSS, SCSS, Zustand, Supabase etc.'
                projectImage={portfolioImages.shovel}
            />
            <PortfolioCard
                skills={[langs.html, langs.css, langs.typescript, langs.javascript, langs.react, langs.zustand]}
                header='To-Do List'
                dateTime='2025-10'
                dateString='October 2025'
                description='Minimalistic todo list app based on SPA with integration of several technologies: Vite, TypeScript, React, Html. CSS, Tailwind 4, Zustand etc.'
                projectImage={portfolioImages.todoList}
            />
            {isModal && <Modal/>}
        </section>
    )
}