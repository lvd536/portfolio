import csharp from '../../assets/langs/csharp.svg'
import css from '../../assets/langs/css.svg'
import html from '../../assets/langs/html.svg'
import typescript from '../../assets/langs/typescript.svg'
import javascript from '../../assets/langs/javascript.svg'
import scss from '../../assets/langs/scss.svg'
import zustand from '../../assets/langs/zustand.svg'
import telegram from '../../assets/langs/telegram.svg'
import react from '../../assets/langs/react.svg'
import database from '../../assets/langs/database.svg'
import tailwind from '../../assets/langs/tailwind.svg'
import shovel from '../../assets/portfolio/shovel.jpg'
import portfolio from '../../assets/portfolio/portfolio.jpg'
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
                skills={[html, css, tailwind, typescript, javascript, react, database, zustand]}
                header='Portfolio'
                dateTime='2025-10'
                dateString='October 2025'
                description='Minimalistic portfolio based on SPA with integration of several technologies: Vite, TypeScript, React, Html. CSS, Tailwind 4, Zustand etc.'
                projectImage={portfolio}
            />
            <PortfolioCard
                skills={[html, css, scss, typescript, javascript, react, database, zustand, telegram]}
                header='Hamster Combat Clone'
                dateTime='2025-09'
                dateString='September 2025'
                description='Hamster Combat V1 Telegram WebApp clone with integration of several technologies: Vite, TypeScript, React, Html. CSS, SCSS, Zustand, Supabase etc.'
                projectImage={shovel}
            />
            {isModal && <Modal/>}
        </section>
    )
}