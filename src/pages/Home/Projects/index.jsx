import React, { useState } from 'react';
import { projects } from '../../../data/project.js';
import { ProjectCards } from '../Cards/components/ProjectCards/ProjectCards';
import {
  CardContainer,
  Container,
  Desc,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper
} from './components/ProjectsStyle';

export function Projects({openModal,setOpenModal}) {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Venha conhecer os meus projetos desenvolvidos ao longo desse tempo de estudos.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCards key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}