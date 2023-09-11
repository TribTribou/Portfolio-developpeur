import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageCompetences from '../../images/CarteCompetences.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 3vw;
  background-color: black;
  border-radius: 1.8vw;

  @media (max-width: 700px) {
    height: 60vh;
    margin-top: 10%;
  }

  @media (max-width: 500px) {
    height: 40vh;
    margin-top: 15%;
  }

  @media (max-width: 350px) {
    height: 30vh;
  }
`;

const ImageCompStyle = styled.img `
width: auto;
  height: 60vh;
  object-fit: cover;
  margin-bottom: 2.4vw;

  @media (max-width: 700px) {
    height: 45vh;
    margin-bottom: 1.8vw;
  }

  @media (max-width: 500px) {
    height: 30vh;
    margin-bottom: 1.2vw;
  }

  @media (max-width: 350px) {
    height: 20vh;
    margin-bottom: 0.8vw;
  }
`;

function Competence() {
  return (
    <Container>
      <header>
        <h1>Carte mentale de mes competences:</h1>
      </header>
      <Link to="https://miro.com/app/board/uXjVMsWG4FI=/?share_link_id=729761204349" target="_blank">
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