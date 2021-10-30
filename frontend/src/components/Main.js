import React from 'react';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import HomeSection from './HomeSection';
import PortfolioSection from './PortfolioSection';
import Qualification from './QualificationSection';
import Skills from './SkillsSection';
import styled from 'styled-components';

const StyledMain = styled.main`
  @media screen and (min-width: 768px){
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px){
    padding: 0;
  }
`;

export default function Main() {
  return (
    <StyledMain>
      <HomeSection />
      <AboutSection />
      <Skills />
      <Qualification />
      <PortfolioSection />
      <ContactSection />
    </StyledMain>
  )
}
