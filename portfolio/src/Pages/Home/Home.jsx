import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AperçuP2 from '../../images/AperçuP2.PNG';
import AperçuP3 from '../../images/AperçuP3.png';
import AperçuP4 from '../../images/AperçuP4(2).png';
import AperçuP5 from '../../images/AperçuP5.jpg';
import AperçuP6 from '../../images/AperçuP6(2).png';
import AperçuP7 from '../../images/AperçuP7.png';
import ProfileBlock from '../../Components/Profil/Profil';
import ModalLauncher from '../../Components/ModalesDescription/ModaleLauncher';


const PageContainer = styled.div`
text-align:center;
height: 88vh;
padding-top: 5%;
`

const ProjetButton = styled.button`
  z-index: 2;
  background-color: black;
  opacity: 0.85;
  color:red;
  text-shadow: red 1px 0 1.5vw;
  box-shadow: red 1px 0 1.8vw 0.5vw;
  border-radius: 20vh;
  height: 5vh;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  /* Ajoutez d'autres styles selon vos besoins */

  &:hover {
    background-color: #280004;
    text-decoration: none;
    transform: scaleX(1);
    transform-origin: bottom left;
    font-size: 1.3rem;
    text-shadow: red 1px 0 3vw;
    box-shadow: red 1px 0 1.8vw 1.5vw;
  }
`;

const ProjetContainer = styled.div`
background-color: black;
padding: 1px 3vh 0 3vh;
margin: 0.5% 5% 2% 5%;
width: 85%;
height: 80vh;
border-radius: 2vh;
opacity: 0.9;

@media (max-width: 1200px) {
    height: 75vh;
    margin: 5%;
  }
  
  @media (max-width: 1000px) {
    height: 70vh;
    margin: 5%;
    padding: 1px 3vh 1vh 3vh;
  }
  
  @media (max-width: 800px) {
    height: 65vh;
  }
  
  @media (max-width: 600px) {
    height: auto;
    margin: 5% 3vh 5% 3vh;
  }

  @media (max-width: 500px) {
    margin: 5% 2vh 5% 2vh;
  }

  @media (max-width: 450px) {
    margin: 5% 1vh 5% 1vh;
  }

  @media (max-width: 450px) {
    margin: 5% 0 5% 0;
    max-width: 95%;
  }
  `;

  const LinkList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 3% 5% 1% 5%;
    padding: 0%;
    gap: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `;
  
  const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  margin-bottom: 2%;
  font-size: 1vw;

  @media (max-width: 600px) {
    font-size: 2vw;
  }
  `;
  
  const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  max-width: 40%;
  min-height: 14vh;
  max-height: 14vh;
  flex-basis: calc(50% - 2.5vw);
  text-align: center;
  padding-top: 2vw;
  border-radius: 2vw;
  position: relative;
  cursor: pointer;
  overflow: hidden; /* Masquez tout ce qui dépasse du conteneur */

  /* Ajoutez un fond violet transparent au survol */
  &:hover::before {
    content: ''; /* Ajoutez un pseudo-élément pour créer le fond au survol */
    position: absolute; /* Position absolue par rapport au conteneur parent */
    top: 0; /* Position en haut du conteneur */
    left: 0; /* Position à gauche du conteneur */
    width: 100%; /* Largeur de 100% pour couvrir tout le conteneur */
    height: 100%; /* Hauteur de 100% pour couvrir tout le conteneur */
    background: linear-gradient(#582568, black); /* Dégradé violet */
    z-index: 1; /* Empilez au-dessus de l'image */
    opacity: 0.9; /* Opacité du fond violet */
  }

  @media (max-width: 600px) {
    min-width: 95%;
    margin-left: 4%;
    min-height: 20vh;
    max-height: 20vh;
  }
`;

const ImageAperçu = styled.img`
  width: auto;
  height: 35vh;
  object-fit: fill;
  position: relative;
  bottom: 6em;
  left:3em;
  z-index: 0; /* Image derrière le fond violet */

  @media (max-width: 1200px) {
    height: 28vh;
    left:5em;
  }

  @media (max-width: 1000px) {
    height: 26vh;
    left:7em;
  }

  @media (max-width: 800px) {
    height: 24vh;
    left:9em;
  }

  @media (max-width: 600px) {
    left:0;
  }

`;

const LinkText = styled.p`
  position: absolute;
  top: -1em;
  left: -1em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  color: white;
  font-size: 1vw;
  padding: 10px;
  text-align: center;
  transition: opacity 0.3s ease;
  gap: 1.2vh;

  @media (max-width: 600px) {
    font-size: 2vw;
  }

  ${StyledLinkContainer}:hover & {
    opacity: 1;
    z-index: 2;
  }
`;

function Home() {
  const projetContainerRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToProjects = () => {
    // Utilisez la méthode `scrollIntoView` pour faire défiler la page vers la section projetContainerRef
    projetContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfil = () => {
    window.scrollTo({
      top: 0, // Définissez la position à laquelle vous souhaitez faire défiler la page, ici, tout en haut (0)
      behavior: 'smooth', // Utilisez un défilement en douceur
    });
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProfileBlock scrollToProjects={scrollToProjects} />
        <PageContainer>
          <ProjetButton onClick={scrollToProfil}> ^ </ProjetButton>
          <ProjetContainer ref={projetContainerRef}>
        <h2>
        Liste des projets:
        </h2>
        <LinkList>
          <StyledLinkContainer onClick={() => openModal('P2')}>
          <ImageAperçu src={AperçuP2} 
          alt="aperçu site Booki"/>
          <LinkText>Projet Booki - Html et CSS
          </LinkText>
          </StyledLinkContainer>
          <StyledLinkContainer onClick={() => openModal('P3')}>
          <ImageAperçu src={AperçuP3} 
          alt="aperçu site Sophie bluel, Architecte d'intérieur"/>
          <LinkText>Projet Sophie Bluel - Javascript
          </LinkText>
          </StyledLinkContainer>
          <StyledLinkContainer onClick={() => openModal('P4')}>
          <ImageAperçu src={AperçuP4} 
          alt="aperçu présentation projet 4 - Planifiez le developpement du site de votre client"/>
          <LinkText>Projet Menu Maker - Planification
          </LinkText>
          </StyledLinkContainer>
          <StyledLinkContainer onClick={() => openModal('P5')}>
          <ImageAperçu src={AperçuP5} 
          alt="aperçu Site Photographe Nina Carducci - projet Debug & Optimisation"/>
          <LinkText>Projet Nina Carducci - Debug et Optimisation
          </LinkText>
          </StyledLinkContainer>
          <StyledLinkContainer onClick={() => openModal('P6')}>
          <ImageAperçu src={AperçuP6} 
          alt="aperçu Site de location Kasa - projet React"/>
          <LinkText>Projet Kasa - React
          </LinkText>
          </StyledLinkContainer>
          <StyledLinkContainer onClick={() => openModal('P7')}>
          <ImageAperçu src={AperçuP7} 
          alt="aperçu Backend"/>
          <LinkText>Projet Mon Vieux Grimoire - Backend
          </LinkText>
          </StyledLinkContainer>
        </LinkList>
        </ProjetContainer>
        </PageContainer>
      </header>
      {selectedProject && (
        <ModalLauncher selectedProject={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Home;