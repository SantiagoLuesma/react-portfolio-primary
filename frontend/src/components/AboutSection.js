import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const StyledSection = styled.section`
  padding: 2rem 0 4rem;
  .container{
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
  .grid{
    display: grid;
    gap: 1.5rem;
  }
  .about__img{
    width: 200px;
    border-radius: .5rem;
    justify-self: center;
    align-self: center;
  }
  .about__description{
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
    .about__container{
        column-gap: 5rem;
    }
    .about__img{
        width: 350px;
    }
    .about__description{
        text-align: initial;
    }
  }

  @media screen and (min-width: 568px){
  .about__container {
    grid-template-columns: repeat(2, 1fr);
  }

  }
`;

export default function AboutSection() {
  return (
      <StyledSection id="about">

        <SectionTitle subtitle="Te cuento un poco sobre mí" title="Sobre mí" />

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
      </StyledSection>
  )
}
