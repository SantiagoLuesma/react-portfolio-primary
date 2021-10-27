import React from 'react'

export default function Skills() {
  return (
    <>
      <section class="skills section" id="skills">

        <h2 class="section__title">Habilidades</h2>
        <span class="section__subtitle">Mis conocimientos</span>

        <div class="skill__container container grid">
            <div>
                {/* <!--==================== SKILL 1 ====================--> */}
                <div class="skills__content skills__open">
                    <div class="skills__header">
                        <i class="uil uil-brackets-curly skills__icon"></i>

                        <div>
                            <h1 class="skills__title">Tecnologías</h1>
                        </div>

                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">HTML</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__html"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">CSS</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__css"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">JavaScript</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__js"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">React</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__react"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--==================== SKILL 2 ====================--> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-server-network skills__icon"></i>

                        <div>
                            <h1 class="skills__title">Herramientas</h1>
                        </div>

                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Figma</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__php"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">GIT</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__node"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">BEM</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__python"></span>
                            </div>
                        </div>

                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Scrum</h3>
                            </div>
                            <div class="skills__bar">
                                <span class="skills__percentage skills__python"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}
