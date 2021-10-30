import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: none;
  a {
    color: var(--first-color);
    transition: .3s;
    display: inline-flex;
    align-items: center;
    &:hover {
      transform: translateY(0.25rem);
    }
    span {
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var(--font-medium);
      margin-right: var(--mb-0-25);
    }
  }
  .home__scroll-mouse{
    font-size: 2rem;
  }
  .home__scroll-arrow{
    font-size: 1.25rem;
  }
  @media screen and (min-width: 768px){
    display: block;
    a {
      margin-left: 3rem;
    }
  }
`;

export default function HomeSectionScroll() {
  return (
    <StyledDiv>
      <a href="#about">
          <i class="uil uil-mouse-alt home__scroll-mouse"></i>
          <span class="home__scroll-name">Scroll down</span>
          <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </StyledDiv>
  )
}
