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
  margin: 15vh 3vw 3vh 3vh;
  background-color: black;
  border-radius: 1.8vw;
  padding-left:5%;

  @media (max-width: 700px) {
    height: 60vh;
    font-size: smaller;
  }

  @media (max-width: 550px) {
    margin-top: 40%;
  }

  @media (max-width: 450px) {
    margin-top: 50%;
    height: 50vh;
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

  @media (max-width: 550px) {
    height: 40vh;
    margin-bottom: 1.2vw;
  }

  @media (max-width: 450px) {
    height: 30vh;
    margin-bottom: 0.8vw;
  }

  @media (max-width: 400px) {
    height: 25vh;
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