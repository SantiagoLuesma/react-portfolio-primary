import React from 'react'

export default function AboutSection() {
  return (
    <>
      <section class="about section" id="about">

        <h2 class="section__title">Sobre mí</h2>
        <span class="section__subtitle">Te cuento un poco sobre mí</span>

        <div class="about__container container grid">
            <img src="assets/img/about.jpg" alt="" class="about__img" />

            <div class="about__data">
                <p class="about__description">Hola, soy Santiago Luesma y soy programador. Actualmente puedo considerarme desarrollador frontend pero también estoy capacitándome en backend, ya que mi idea es aprender lo máximo posible.</p>

                <div class="about__info">
                    <div>
                        <span class="about__info-title">1</span>
                        <span class="about__info-name">Año de <br /> experiencia</span>
                    </div>

                    <div>
                        <span class="about__info-title">3</span>
                        <span class="about__info-name">Proyectos <br /> completados</span>
                    </div>

                    <div>
                        <span class="about__info-title">5</span>
                        <span class="about__info-name">Tecnologías <br /> aprendidas</span>
                    </div>
                </div>

                <div class="about__buttons">
                    <a download="" href="../assets/Santiago Luesma - Desarrollador de Software - seluesma@gmail.com.pdf" class="button button--flex">
                        Descargar CV<i class="uil uil-download-alt button__icon"></i>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
