import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 1.2vw 5vw;
  z-index: 2;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2vw;
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    margin-left: 2vw;
    position: relative;
    letter-spacing: 0.1em;
    text-shadow: red 1px 0 1.2vw;

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
      <Title>Portfolio BERNARD Florian</Title>
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