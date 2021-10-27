import React from 'react';

export default function MenuNav() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">Santiago Luesma</a>

          <div className="nav__menu" id="nav-menu">
              <ul className="nav__list grid">
                  <li className="nav__item">
                      <a href="#home" className="nav__link active-link">
                          <i className="uil uil-estate nav__icon"></i> Inicio
                      </a>
                  </li>
                  <li className="nav__item">
                      <a href="#about" className="nav__link">
                          <i className="uil uil-user nav__icon"></i> Sobre mí
                      </a>
                  </li>
                  <li className="nav__item">
                      <a href="#skills" className="nav__link">
                          <i className="uil uil-file-alt nav__icon"></i> Habilidades
                      </a>
                  </li>
                  <li className="nav__item">
                      <a href="#qualification" className="nav__link">
                          <i className="uil uil-briefcase-alt nav__icon"></i> Experiencia
                      </a>
                  </li>
                  <li className="nav__item">
                      <a href="#portfolio" className="nav__link">
                          <i className="uil uil-scenery nav__icon"></i> Portfolio
                      </a>
                  </li>
                  <li className="nav__item">
                      <a href="#contact" className="nav__link">
                          <i className="uil uil-message nav__icon"></i> Contacto
                      </a>
                  </li>
                  </ul>
                  <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <div className="nav__btns">
              {/* - Theme change button  */}
              <i className="uil uil-moon change-theme" id="theme-button"></i>
              <div className="nav__toggle" id="nav-toggle">
                  <i className="uil uil-apps"></i>
              </div>
          </div>
        </nav>
      </header>
    </>
  )
}
