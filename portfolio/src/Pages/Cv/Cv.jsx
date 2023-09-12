import React from 'react';
import styled from 'styled-components';

const BlocCv = styled.div`
background-color: black;
opacity: 0.9;
border-radius: 10vh;
margin: 12vh;
padding: 1px 0 2vh 0;
text-align: center;
font-size: 2.2vh;
`

function Cv() {
    return (
      <BlocCv >
        <header >
          <h1>
          Formation:
          </h1>
          <p>
           Formation <a href="https://www.openclassrooms.com/" target="_blank">OpenClassroom</a> developpeur Web:
            <br /><br />Janvier 2023 - Septembre 2023
          </p>
          <h1>
            Diplomes:
          </h1>
          <h2>
           Niveau 5:
          </h2>
          <p>
            Septembre 2023: Developpeur Web
          </p>
          <h2>
           Niveau 4:
          </h2>
          <p>
            avril 2016: Employe de Vente Polyvalent en Magasin
          </p>
          <h1>
            Certificats:
          </h1>
          <p>
            Passez au Full Stack avec Node.js, Express et MongoDB - Openclassroom
            <br />Debutez avec React - Openclassroom
            <br />Mettez en place votre environnement front-end - Openclassroom
            <br />Ameliorez l'impact de vos presentations - Openclassroom
            <br />Gerez du code avec Git et GitHub - Openclassroom
            <br />Apprenez a utiliser la ligne de commande dans un terminal - Openclassroom
            <br />Creez votre site web avec HTML5 et CSS3 - Openclassroom
            <br />Apprenez a programmer avec JavaScript - Openclassroom
          </p>
        </header>
      </BlocCv>
    );
  }

export default Cv;