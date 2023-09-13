import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoutonFermer = styled.button`
background-color: black;
color: red;
font-family: 'Virgo';
font-size: 1.2vh;
border-radius: 5vh;
border-color: red;
text-shadow: red 1px 0 1.2vw;
box-shadow: red 1px 0 1.2vw 0.5vw;
padding: 1%;

&:hover {
    font-size: 1.3vh;
    background-color: red;
    color: black;
}
`

const ModalContainer = styled.div`
  background-color: black;
  opacity: 0.88;
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 5vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3vh;
`;

const SubTitle = styled.h2`
  color: #8d007d;
  text-shadow: #8d007d 1px 0 1.2vw;
  font-size: 2vh;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.5vh;
  line-height: 1.5;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1.5vh;
`;


const ProjectLink = styled.a`
  display: block;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

function ModalP3({ onClose }) {
   const modalRef = useRef();

   const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleClickOutside}>
    <ModalContainer ref={modalRef}>
      <Title>Projet Sophie Bluel - Javascript</Title>
      <SubTitle>Mission :</SubTitle>
      <Paragraph>
        Vous travaillez comme developpeur front-end pour l'agence ArchiWebos qui comprend 50 salaries. 
        <br/>Ayant termine votre dernier projet avec un peu d'avance, vous etes envoye en renfort comme developpeur front-end d'une equipe qui travaille sur la conception du site portfolio d'une architecte d'interieur.
      </Paragraph>
      <SubTitle>Problematiques :</SubTitle>
      <Paragraph>
        Cette fois, en plus d'html et CSS, il a fallu que j'integre javascript dans mon developpement pour créer les fonctions de filtres et de page dynamique.
        <br/>En plus de javascript, j'ai du apprendre a travailler avec un backend et une api, ce qui m'a pose beaucoup de problemes puisque c'etait la premiere fois que je travaillais avec un backend.
      </Paragraph>
      <SubTitle>Competences et outils utilisees</SubTitle>
      <IconContainer>
        Html, Css, github, javascript, integration avec API et backend
        {/* Ajoutez d'autres icônes si nécessaire */}
      </IconContainer>
      <ProjectLink href="https://drive.google.com/file/d/1X80PkV6ciIlhMfB4_9l4IoT2IDIk0joL/view?usp=sharing" target="_blank">
        Voir le projet
      </ProjectLink>
      <BoutonFermer onClick={onClose}>Fermer</BoutonFermer>
    </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalP3;