import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  grid-column: 1/3;
  h1 {
    font-size: var(--big-font-size);
  }
  h3 {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }
  p {
    margin-bottom: var(--mb-2);
  }
  a {
    display: inline-block;
    background-color: var(--first-color);
    color: #FFF;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    display: inline-flex;
    align-items: center;
    &:hover {
      background-color: var(--first-color-alt);
    }
    i {
      font-size: 1.25rem;
      margin-left: var(--mb-0-5);
      transition: .3s;
    }
  }
  @media screen and (min-width: 568px) {
    grid-column: initial;
  }
`;

export default function HomeSectionData() {
  return (
    <StyledDiv>
      <h1>Hola, soy Santiago</h1>
      <h3>Desarrollador frontend</h3>
      <p>Autodidacta, emprendedor y fanático de aprender cosas nuevas.</p>
      <a href="#contact">
          Hablemos <i class="uil uil-message"></i>
      </a>
    </StyledDiv>
  )
}
