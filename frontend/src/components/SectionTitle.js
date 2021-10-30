import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  h2 {
    font-size: var(--h1-font-size);
    text-align: center;
  }
  span {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
    text-align: center;
  }
`;

export default function SectionTitle({
  subtitle = 'Subtitle',
  title = 'Title',
}) {

  return (
    <SectionTitleStyle>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </SectionTitleStyle>
  )
}
