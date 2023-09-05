import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageCompetences from '../../images/CarteCompetences.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 100% de la hauteur de la vue */
  margin: 50px;
  background-color: black;
  border-radius: 20px;
`;

const ImageCompStyle = styled.img `
width: auto;
  height: 600px;
  object-fit: cover;
  margin-bottom: 20px;
`;

function Competence() {
  return (
    <Container>
      <header>
        <h1>Carte mentale de mes competences:</h1>
      </header>
      <Link to="https://miro.com/app/board/uXjVMsWG4FI=/?share_link_id=729761204349">
      <ImageCompStyle
        src={ImageCompetences}
        alt="Carte mentale de compétences"
      />
      </Link>
        Cliquez sur l'image pour acceder a la version complete avec fonction zoom
    </Container>
  );
}

export default Competence;