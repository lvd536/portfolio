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
import testCase from '../../assets/portfolio/testCase.jpg'
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
                skills={[html, css, scss, typescript, javascript, react, csharp]}
                header='Test Header'
                dateTime='2025-08'
                dateString='August 2025'
                description='Minimalistic form of authorization based on SPA with integration of several technologies: Vite, TypeScript, React, React Router, Redux, Redux Toolkit, Redux Persist, Formik, Yup, classNames, PostCSS, Vite SVG icon, Vitest etc.'
                projectImage={testCase}
            />
            <PortfolioCard
                skills={[html, css, scss, typescript, javascript, react, database, zustand, telegram]}
                header='Test Header 2'
                dateTime='2025-09'
                dateString='September 2025'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
                projectImage={testCase}
            />
            {isModal && <Modal/>}
        </section>
    )
}