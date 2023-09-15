import React from 'react'
import "./portfolio.css";
import Projects from './Projects';
const Portfolio = () => {
    return (
        <section className = "portfolio section" id = "portfolio">
                <h2 className = "section__title">Portfolio</h2>
                <span className = "section__subtitle">Some of the projects I have done</span>
                <Projects/>
        </section>
    )
}

export default Portfolio
