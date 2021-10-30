import React from 'react';
import styled from 'styled-components';
import SkillItem from './SkillItem';

const StyledDiv = styled.div`
  .skills__header{
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }
  .skills__title{
    font-size: var(--h3-font-size);
  }
  .skills__list{
    row-gap: 1.5em;
    padding-left: 2.7rem;
  }
  .skills__arrow{
      font-size: 2rem;
      color: var(--first-color);
      margin-left: auto;
      transition: .4s;
  }
  .skills__open .skills__arrow{
      transform: rotate(-180deg);
  }
  .skills__close .skills__list{
    height: 0;
    overflow: hidden;
  }
  .skills__open  .skills__list{
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  @media screen and (max-width: 350px){
    .skills__title{
        font-size: var(--normal-font-size);
    }
  }
`;


export default function Skill ({

  // icon,
  title,
  skill,
  clase,

}) {
  return (
    <StyledDiv className="skills__content">
        <div className="skills__header">

            <i className={clase}></i>

            <div>
                <h1 className="skills__title">{title}</h1>
            </div>

            <i class="uil uil-angle-down skills__arrow"></i>

        </div>

        <div className="skills__list grid">
            {
              /* item[0] ? item.classList.add=('skills__open') :  item.classList.add=('skills__open'); */
              skill.map((item) => {<SkillItem skillTitle={item} />})
            }
        </div>
    </StyledDiv>
  );
}