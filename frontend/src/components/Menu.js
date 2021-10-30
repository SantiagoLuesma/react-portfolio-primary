import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var(--font-medium);
      &:hover {
        color: hsl(230, 69%, 61%);
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
        &:hover {
          color: var(--first-color);
        }
        i {
          font-size: 1.2rem;
          display: none;
        }
      }
    }
  }
  i {
    position: absolute;
    right: 1.3rem;
    bottom: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);
    &:hover {
      color: var(--first-color-alt);
    }
  }
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0,0,0,.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
  }
  @media screen and (max-width: 350px){
    padding: 2rem .25rem 4rem;
    ul {
      column-gap: 0;
    }
  }
  @media screen and (min-width: 768px){
    margin-left: auto;
    ul {
      display: flex;
      column-gap: 2rem;
    }
    i {
      display: none;
    }
  }
`;

export default function Menu() {
  return (
    <StyledDiv id="nav-menu">
      <ul>
        <li>
            <a href="#home" className="active-link">
                <i className="uil uil-estate"></i> Inicio
            </a>
        </li>
        <li>
            <a href="#about">
                <i className="uil uil-user"></i> Sobre mí
            </a>
        </li>
        <li>
            <a href="#skills">
                <i className="uil uil-file-alt"></i> Habilidades
            </a>
        </li>
        <li>
            <a href="#qualification">
                <i className="uil uil-briefcase-alt"></i> Experiencia
            </a>
        </li>
        <li>
            <a href="#portfolio">
                <i className="uil uil-scenery"></i> Portfolio
            </a>
        </li>
        <li>
            <a href="#contact">
                <i className="uil uil-message"></i> Contacto
            </a>
        </li>
      </ul>
      <i className="uil uil-times nav__close" id="nav-close"></i>
    </StyledDiv>
  )
}
