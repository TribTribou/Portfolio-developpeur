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

function ModalP7({ onClose }) {
   const modalRef = useRef();

   const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleClickOutside}>
    <ModalContainer ref={modalRef}>
      <Title>Projet Mon Vieux Grimoire - Backend </Title>
      <SubTitle>Mission :</SubTitle>
      <Paragraph>
        Vous etes developpeur back-end en freelance depuis maintenant un an. 
        <br/>Vous avez l'habitude de travailler avec Kevin, un developpeur front-end plus experimente que vous, 
        et qui vous contacte pour vous proposer mutualiser vos competences front / back 
        sur un tout nouveau projet: 
        <br/>Il s'agit d'une petite chaine de librairies qui souhaite ouvrir un site de referencement et de notation de livres.
      </Paragraph>
      <SubTitle>Problematiques :</SubTitle>
      <Paragraph>
        Decouverte de la conception d'un Backend, ainsi que de l'utilisation de MongoDB pour la BDD.
        <br/>Aquerir le savoir necessaire m'a pris un peu de temps, mais ce qui m'en a coute le plus, c'etait une erreur de ma part:
        <br/>l'oubli d'une ligne contenant 'next()' pour eviter de bloquer une requete sur une attente de reponse infini.
        <br/>Les questions de securite sont aussi tres importante.
      </Paragraph>
      <SubTitle>Competences et outils utilisees</SubTitle>
      <IconContainer>
        Conception d'un backend, MongoDB, Javascript, React.
        {/* Ajoutez d'autres icônes si nécessaire */}
      </IconContainer>
      <ProjectLink href="https://github.com/TribTribou/Backend" target="_blank">
        Voir le projet
      </ProjectLink>
      <BoutonFermer onClick={onClose}>Fermer</BoutonFermer>
    </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalP7;