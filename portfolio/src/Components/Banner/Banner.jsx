import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 10px 50px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    margin-left: 20px;
    position: relative;
    letter-spacing: 0.1em;
    text-shadow: red 1px 0 10px;
    text-decoration: none;

    &:before {
      text-decoration: none;
      content: '';
      position: absolute;
      width: 100%;
      height: 0.15em;
      bottom: -5px;
      left: 0;
      background-color: red;
      box-shadow: red 1px 0 15px 5px;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    &:hover:before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    &.active {
      border-radius: 10px;
      padding: 2px 10px; // Vous pouvez ajuster le rembourrage selon vos besoins
      box-shadow: red 1px 0 15px 5px;
    }
  }
`;


const Banner = () => {
  return (
    <BannerWrapper>
      <Title>Portfolio BERNARD Florian</Title>
      <Navigation>
        <NavLink exact to="/">Accueil</NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/competences">Competences</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
    </BannerWrapper>
  );
};

export default Banner;