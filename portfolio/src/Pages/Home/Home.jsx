import React from 'react';
import styled from 'styled-components';
import AperçuP2 from '../../images/AperçuP2.PNG'
import AperçuP3 from '../../images/AperçuP3.png'
import AperçuP4 from '../../images/AperçuP4.png'
import AperçuP5 from '../../images/AperçuP5.png'
import AperçuP6 from '../../images/AperçuP6.png'
import AperçuP7 from '../../images/AperçuP7.png'

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne lorsque la largeur est insuffisante */
  justify-content: space-between; /* Espacement entre les colonnes */
  align-items: flex-start; /* Aligner les éléments en haut de chaque colonne */
  margin-top: 2%;
  gap: 20px; /* Espacement vertical entre les liens */
`;

const PageContainer = styled.div`
  background-color: black;
  padding: 20px;
  margin: 8%;
  width: 80%;
  border-radius: 20px;
`;

const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  margin-bottom: 2%;
`;

const StyledLinkContainer = styled.div`
  background: linear-gradient(#582568, black);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  width: 45%;
  min-height: 300px;
  max-height: 300px;
  flex-basis: calc(50% - 10px); /* Largeur de chaque colonne, moins l'espacement entre les colonnes */
  text-align: center; /* Centrer le contenu */
  padding-top: 20px;
  border-radius: 20px;
`;

const ImageAperçu = styled.img `
  width: 50%; /* Remplit la largeur de la colonne */
  height: auto;
  max-height: 200px;
  object-fit: fill;
  margin-top: 10px; /* Espace entre l'image et le lien */
`;

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <PageContainer>
        <h2>
        Liste des projets:
        </h2>
        <LinkList>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://tribtribou.github.io/Site_Booki-Projet2OC-/"> "Creez la page d'accueil d'une agence de voyage avec HTML et CSS"
          </StyledLink>
          </p>
          <ImageAperçu src={AperçuP2} 
          alt="aperçu site Booki"/>
          </StyledLinkContainer>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://drive.google.com/file/d/1X80PkV6ciIlhMfB4_9l4IoT2IDIk0joL/view?usp=sharing"> "Creez une page web dynamique avec JavaScript"</StyledLink>- Pdf de ma presentation du projet.
          </p>
          <ImageAperçu src={AperçuP3} 
          alt="aperçu site Sophie bluel, Architecte d'intérieur"/>
          </StyledLinkContainer>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://drive.google.com/file/d/1zqWnlwtqgJTGFl_eXSA1EVqEDHl8LBmx/view?usp=sharing"> "Planifiez le developpement du site de votre client" </StyledLink>- Pdf de ma presentation du projet.
          </p>
          <ImageAperçu src={AperçuP4} 
          alt="aperçu présentation projet 4 - Planifiez le developpement du site de votre client"/>
          </StyledLinkContainer>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://tribtribou.github.io/nina-carducci.github.io/"> "Debuggez et optimisez un site de photographe"</StyledLink>
          </p>
          <ImageAperçu src={AperçuP5} 
          alt="aperçu Site Photographe Nina Carducci - projet Debug & Optimisation"/>
          </StyledLinkContainer>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://tribtribou.github.io/P6_kasa/"> "Creer un site de location avec React"</StyledLink>
          </p>
          <ImageAperçu src={AperçuP6} 
          alt="aperçu Site de location Kasa - projet React"/>
          </StyledLinkContainer>
          <StyledLinkContainer>
          <p>Projet de formation 'Developpeur Web' OpenClassroom:
          <StyledLink href="https://github.com/TribTribou/Backend"> "Developpez le back-end d'un site de notation de livres"</StyledLink>
          </p>
          <ImageAperçu src={AperçuP7} 
          alt="aperçu Site de location Kasa - projet React"/>
          </StyledLinkContainer>
        </LinkList>
        </PageContainer>
      </header>
    </div>
  );
}

export default Home;
