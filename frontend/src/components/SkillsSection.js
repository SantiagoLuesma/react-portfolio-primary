import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Skill from './Skill';

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
    .skills__container{
        row-gap: 0;
    }
    .skills__icon{
        margin-right: var(--mb-0-75);
        font-size: 2rem;
        color: var(--first-color);
    }

    @media screen and (min-width: 768px){
        padding: 6rem 0 2rem;
        .container{
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media screen and (max-width: 350px){
        .container{
            margin-left: var(--mb-1);
            margin-right: var(--mb-1);
        }
    }

    @media screen and (min-width: 568px){
        .skills__container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

export default function Skills() {
  return (
    <StyledSection class="skills section" id="skills">

        <SectionTitle subtitle="Mis conocimientos" title="Habilidades" />

        <div class="skills__container container grid">
            <div>
                {/* <!--==================== SKILL 1 ====================--> */}
                <Skill
                    title="Tecnologías"
                    skill={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "GIT"
                    ]}
                    clase="uil uil-brackets-curly skills__icon"
                    />
                {/* <!--==================== SKILL 2 ====================--> */}
                <Skill
                    title="Frameworks / Librerías"
                    skill={[
                        "React",
                        "Styled Components",
                        "Bootstrap",
                        "SASS"
                    ]}
                    clase="uil uil-swatchbook skills__icon"
                    />
                {/* <!--==================== SKILL 3 ====================--> */}
                <Skill
                    title="Herramientas y metodologías"
                    skill={[
                        "Scrum",
                        "BEM",
                        "Bootstrap",
                        "Figma",
                        "Git Hub"
                    ]}
                    clase="uil uil-server-network skills__icon"
                />
            </div>
        </div>
    </StyledSection>
  )
}
