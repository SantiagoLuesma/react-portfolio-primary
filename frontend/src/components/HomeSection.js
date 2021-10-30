import React from 'react';
import styled from 'styled-components';
import HomeSectionSocial from './HomeSectionSocial';
import HomeSectionData from './HomeSectionData';
import HomeSectionScroll from './HomeSectionScroll';

const StyledSection = styled.section`
  padding: 2rem 0 4rem;
  .home__container{
    gap:1rem
  }
  .container {
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
  .grid{
    display: grid;
    gap: 1.5rem;
  }
  .home__content{
    grid-template-columns: .5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
  }
  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
    .container{
        margin-left: auto;
        margin-right: auto;
    }
    .home__container{
        row-gap: 5rem;
    }
    .home__content{
        padding-top: 5.5rem;
        column-gap: 2rem;
    }
  }
  @media screen and (max-width: 350px){
    .container{
        margin-left: var(--mb-1);
        margin-right: var(--mb-1);
    }
    .home__content{
        grid-template-columns: .25fr 3fr;
    }
  }
  @media screen and (min-width: 568px){
    .home__content{
        grid-template-columns: max-content 1fr 1fr;
    }
  }
`;

export default function HomeSection() {
  return (
      <StyledSection className="home" id="home">
          <div className="home__container container grid">
              <div className="home__content grid">
                  <HomeSectionSocial />

                  {/* <div class="home__img">
                      <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <mask id="mask0" mask-type="alpha">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                          </mask>
                          <g mask="url(#mask0)">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                              <image class="home__blob-img" x='12' y='18' xlink:href="assets/img/perfil.png"/>
                          </g>
                      </svg>
                  </div> */}

                  <HomeSectionData />
              </div>

              <HomeSectionScroll />
          </div>
      </StyledSection>
  )
}
