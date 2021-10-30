import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
  a {
    font-size: 1.25rem;
    color: var(--first-color);
    &:hover {
      color: var(--first-color-alt);
    }
  }
  @media screen and (min-width: 1024px){
    transform: translateX(-6rem);
  }
`;

export default function HomeSectionSocial() {
  return (
    <StyledDiv>
      <a href="https://linkedin.com/" target="_blank">
          <i class="uil uil-linkedin-alt"></i>
      </a>

      <a href="https://youtube.com/" target="_blank">
          <i class="uil uil-youtube"></i>
      </a>

      <a href="https://github.com/" target="_blank">
          <i class="uil uil-github-alt"></i>
      </a>
    </StyledDiv>
  )
}
