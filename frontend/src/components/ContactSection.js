import React from 'react'

export default function ContactSection() {
  return (
    <>
      <section class="contact section" id="contact">
                <h2 class="section__title">Contacto</h2>
                <span class="section__subtitle">Hablemos</span>

                <div class="contact__container container grid">
                    <div>
                        <div class="contact__information">
                            <i class="uil uil-phone contact__icon"></i>

                            <div>
                                <h3 class="contact__title">Llamame</h3>
                                <span class="contact__subtitle">+5493516757784</span>
                            </div>
                        </div>

                        <div class="contact__information">
                            <i class="uil uil-envelope contact__icon"></i>

                            <div>
                                <h3 class="contact__title">Email</h3>
                                <span class="contact__subtitle">seluesma@gmail.com</span>
                            </div>
                        </div>

                        <div class="contact__information">
                            <i class="uil uil-map-marker contact__icon"></i>

                            <div>
                                <h3 class="contact__title">¿De dónde soy?</h3>
                                <span class="contact__subtitle">Córdoba, Argentina.</span>
                            </div>
                        </div>
                    </div>

                    <form action="" class="contact__form grid">
                        <div class="contact__inputs grid">
                            <div class="contact__content">
                                <label for="" class="contact__label">Nombre</label>
                                <input type="text" class="contact__input" />
                            </div>
                            <div class="contact__content">
                                <label for="" class="contact__label">Email</label>
                                <input type="email" class="contact__input" />
                            </div>
                        </div>
                        <div class="contact__content">
                            <label for="" class="contact__label">Asunto</label>
                            <input type="text" class="contact__input" />
                        </div>
                        <div class="contact__content">
                            <label for="" class="contact__label">Mensaje</label>
                            <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
                        </div>

                        <div>
                            <a href="" class="button button--flex">
                                Enviar mensaje
                                <i class="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
    </>
  )
}
