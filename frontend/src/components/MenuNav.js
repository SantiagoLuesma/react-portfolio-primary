import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
    @media screen and (min-width: 768px){
        top: 0;
        bottom: initial;
        padding: 0 1rem;
    }
    @media screen and (min-width: 1024px){
        padding: 0;
    }
    nav {
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 768px;
        margin-left: var(--mb-1-5);
        margin-right: var(--mb-1-5);
        @media screen and (min-width: 768px){
            height: calc(var(--header-height) + 1.5rem);
            column-gap: 1rem;
            margin-left: auto;
            margin-right: auto;
        }
        @media screen and (max-width: 350px){
            margin-left: var(--mb-1);
            margin-right: var(--mb-1);
        }
        a {
            color: var(--title-color);
            font-weight: var(--font-medium);
            &:hover {
                color: var(--first-color);
            }
        }
    }
`;


export default function MenuNav() {

  return (
    <StyledHeader id="header">
        <nav>
          <a href="/">LuesmaDev</a>

          <Menu />

          <div className="nav__btns">
              {/* - Theme change button  */}
              <i
                className="uil uil-moon change-theme"
                id="theme-button"
              ></i>
              <div className="nav__toggle" id="nav-toggle">
                  <i className="uil uil-apps"></i>
              </div>
          </div>
        </nav>
      </StyledHeader>
  )

}