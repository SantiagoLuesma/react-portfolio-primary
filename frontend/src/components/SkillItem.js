import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .skills__titles{
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }
  .skills__name{
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }
  .skills__bar{
    background-color: var(--first-color-lighter);
  }
  .skills__bar,
  .skills__percentage{
      height: 5px;
      border-radius: .25rem;
  }
  .skills__percentage{
    display: block;
    background-color: var(--first-color);
  }
`;

export default function SkillItem ({
  skillTitle,
})  {
  return (
    <StyledDiv class="skills__data">
        <div class="skills__titles">
            <h3 class="skills__name">{skillTitle}</h3>
        </div>
        <div class="skills__bar">
            <span class="skills__percentage"></span>
        </div>
    </StyledDiv>
  );
}