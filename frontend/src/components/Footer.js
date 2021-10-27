import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="footer">
            <div class="footer__bg">
                <div class="footer__container container grid">
                    <div>
                        <h1 class="footer__title">Santiago</h1>
                        <span class="footer__subtitle">Desarrollador frontend</span>
                    </div>

                    <ul class="footer__links">
                        <li>
                            <a href="#about" class="footer__link">Sobre mí</a>
                        </li>

                        <li>
                            <a href="#portfolio" class="footer__link">Portfolio</a>
                        </li>

                        <li>
                            <a href="#contact" class="footer__link">Contacto</a>
                        </li>
                    </ul>

                    <div class="footer__socials">
                        <a href="https://linkedin.com/in/santiagoluesma" target="_blank" class="footer__social">
                            <i class="uil uil-linkedin"></i>
                        </a>

                        <a href="https://youtube.com/" target="_blank" class="footer__social">
                            <i class="uil uil-youtube"></i>
                        </a>

                        <a href="https://github.com/santiagoluesma" target="_blank" class="footer__social">
                            <i class="uil uil-github"></i>
                        </a>
                    </div>
                </div>

                <p class="footer__copy">&#169; Santiago Luesma | Desarrollador frontend.</p>
            </div>

        </footer>
    </>
  )
}
