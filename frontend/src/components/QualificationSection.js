import React from 'react'

export default function Qualification() {
  return (
    <>
      <section class="qualification section" id="qualification">
                <h2 class="section__title">Experiencia</h2>
                <span class="section__subtitle">Mi preparación e historial</span>

                <div class="qualification__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active" data-target="#education">
                            <i class="uil uil-graduation-cap qualification__icon"></i>
                            Educación
                        </div>

                        <div class="qualification__button button--flex" data-target="#work">
                            <i class="uil uil-briefcase-alt qualification__icon"></i>
                            Trabajo
                        </div>
                    </div>

                    <div class="qualification__sections">
                        {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                        <div class="qualification__content qualification__active" data-content id="education">

                            {/* <!--==================== QUALIFICATION 1 ====================--> */}
                            <div class="qualification__data">

                                <div>
                                    <h3 class="qualification__title">Desarrollo web</h3>
                                    <span class="qualification__subtitle">Google</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                            </div>

                            {/* <!--==================== QUALIFICATION 2 ====================--> */}
                            <div class="qualification__data">

                                <div></div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 class="qualification__title">JavaScript Moderno</h3>
                                    <span class="qualification__subtitle">Udemy</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2020
                                    </div>
                                </div>

                            </div>

                            {/* <!--==================== QUALIFICATION 3 ====================--> */}
                            <div class="qualification__data">

                                <div>
                                    <h3 class="qualification__title">React de cero a experto</h3>
                                    <span class="qualification__subtitle">Udemy</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2021
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                            </div>

                            {/* <!--==================== QUALIFICATION 4 ====================--> */}
                            <div class="qualification__data">

                                <div></div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                </div>

                                <div>
                                    <h3 class="qualification__title">Desarrollo de software</h3>
                                    <span class="qualification__subtitle">Instituto Técnico Superior</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2021
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
                        <div class="qualification__content" data-content id="work">

                            {/* <!--==================== QUALIFICATION 1 ====================--> */}
                            <div class="qualification__data">

                                <div>
                                    <h3 class="qualification__title">Desarrollador WordPress</h3>
                                    <span class="qualification__subtitle">Freelance</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2017 - 2021
                                    </div>
                                </div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
    </>
  )
}
