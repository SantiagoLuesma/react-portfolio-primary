import React from 'react'
import AboutSection from './AboutSection'
import HomeSection from './HomeSection'
import PortfolioSection from './PortfolioSection'
import Qualification from './QualificationSection'
import Skills from './SkillsSection'

export default function Main() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <Skills />
      <Qualification />
      <PortfolioSection />
    </>
  )
}
