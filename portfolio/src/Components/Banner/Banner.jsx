import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1.2vw 5vw;
  z-index: 2;

  @media (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding-bottom: 2%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.5vh;

  @media (max-width: 1200px) {
    font-size: 3vh;
  }

  @media (max-width: 1000px) {
    font-size: 2.5vh;
  }

  @media (max-width: 600px) {
    font-size: 1.8vh;
  }
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    margin-left: 2vw;
    position: relative;
    letter-spacing: 0.1em;
    text-shadow: red 1px 0 1.2vw;

    @media (max-width: 550px) {
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding-bottom: 2%;
    }

    &:before {
      text-decoration: none;
      content: '';
      position: absolute;
      width: 100%;
      height: 0.15em;
      bottom: -0.6vw;
      left: 0;
      background-color: red;
      box-shadow: red 1px 0 1.8vw 0.5vw;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    &:hover:before {
      text-decoration: none;
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &.active {
      border-radius: 1vw;
      padding: 0.2vw 1vw; // Vous pouvez ajuster le rembourrage selon vos besoins
      box-shadow: red 1px 0 1.8vw 0.5vw;
      text-decoration: none;
    }
  }
`;


const Banner = () => {
  return (
    <BannerWrapper>
      <Title>Portfolio Florian BERNARD</Title>
      <Navigation>
        <NavLink exact to="/Portfolio-developpeur/">Accueil</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/competences">Competences</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
    </BannerWrapper>
  );
};

export default Banner;