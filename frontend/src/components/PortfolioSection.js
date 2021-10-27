import React from 'react'

export default function PortfolioSection() {
  return (
    <>
      <section class="portfolio section" id="portfolio">
          <h2 class="section__title">Portfolio</h2>
          <span class="section__subtitle">Algunas muestras de mis conocimientos</span>

          <div class="portfolio__container container swiper-container">
              <div class="swiper-wrapper">
                  {/* <!--==================== PORTFOLIO 1 ====================--> */}
                  <div class="portfolio__content grid swiper-slide">
                      <img src="assets/img/portfolio1.jpg" alt="" class="portfolio__img" />

                      <div class="portfolio__data">
                          <h3 class="portfolio__title">Plataforma e-Learning</h3>
                          <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                          <a href="#" class="button button--flex button--small portfolio__button">
                              Demo
                              <i class="uil uil-arrow-right button__icon"></i>
                          </a>
                      </div>
                  </div>

                  {/* <!--==================== PORTFOLIO 2 ====================--> */}
                  <div class="portfolio__content grid swiper-slide">
                      <img src="assets/img/portfolio2.jpg" alt="" class="portfolio__img" />

                      <div class="portfolio__data">
                          <h3 class="portfolio__title">CRUD de proyectos y tareas</h3>
                          <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                          <a href="#" class="button button--flex button--small portfolio__button">
                              Demo
                              <i class="uil uil-arrow-right button__icon"></i>
                          </a>
                      </div>
                  </div>

                  {/* <!--==================== PORTFOLIO 3 ====================--> */}
                  <div class="portfolio__content grid swiper-slide">
                      <img src="assets/img/portfolio3.jpg" alt="" class="portfolio__img" />

                      <div class="portfolio__data">
                          <h3 class="portfolio__title">Landing Page</h3>
                          <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                          <a href="#" class="button button--flex button--small portfolio__button">
                              Demo
                              <i class="uil uil-arrow-right button__icon"></i>
                          </a>
                      </div>
                  </div>

              </div>

              {/* <!--========= Add Arrows ==========--> */}
              <div class="swiper-button-next">
                  <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
              </div>
              <div class="swiper-button-prev">
                  <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
              </div>

              {/* <!--======== Add Pagination ========--> */}
              <div class="swiper-pagination"></div>
          </div>
      </section>
    </>
  )
}
