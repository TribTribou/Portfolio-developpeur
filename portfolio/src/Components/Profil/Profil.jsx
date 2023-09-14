import React from 'react';
import styled, { keyframes } from 'styled-components'
import ProfilPicture from '../../images/Profil_picture.jpg'
import TypingText from '../Animations/TypingText'

const ProfileBlockContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
`

const ProfileImageContainer = styled.div`
width: 100%;
height: 15%;
`

const floatAnimation = keyframes`
0% { top: 20%; }
25% { top: 19%;}
75% { top: 21%; }
100% { top: 20%;}
`

const ProfileContainer = styled.div`
  text-align: center;
  width:80%;
  /* Ajoutez d'autres styles selon vos besoins */
`;

const ProfileImage = styled.img`
  border: 0.8vh solid black;
  box-shadow: red 1px 0 1.2vw 0.5vw;
  border-radius: 50%;
  max-width: 15vh;
  position:absolute;
  right: 50%;
  transform: translate(55%, 10%);
  animation-name: ${floatAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  /* Ajoutez d'autres styles selon vos besoins */

  @media (max-width: 600px) {
    transform: translate(55%, -30%);
  }
`;

const ProfileDescription = styled.p`
  display: flex;
  justify-content:center;
  align-items:center;
  background: #000000B3;
  border-radius: 20vh;
  max-width: 100%;
  height: 30vh;
  color: white;
  /* Ajoutez d'autres styles selon vos besoins */

  @media (max-width: 800px) {
    height: 50vh;
    flex-wrap: wrap;
    border-radius: 10vh;
    text-shadow: white 0px 0 0vw;
  }
`;

const ProfileButton = styled.button`
  background-color: black;
  opacity: 0.85;
  color:red;
  text-shadow: red 1px 0 1.5vw;
  box-shadow: red 1px 0 1.8vw 0.5vw;
  border-radius: 20vh;
  height: 10vh;
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

function ProfileBlock({ scrollToProjects }) {
    const handleButtonClick = () => {
        // Appelez la fonction scrollToProjects pour faire défiler la page
        scrollToProjects();
      };
  return (
    <ProfileBlockContainer>
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage src={ProfilPicture} alt="Image d'un renard dans un champ de lavande" />
      </ProfileImageContainer>
      <ProfileDescription>
        <TypingText/>
      </ProfileDescription>
      <ProfileButton onClick={handleButtonClick}> | <br/> V</ProfileButton>
    </ProfileContainer>
    </ProfileBlockContainer>
  );
}

export default ProfileBlock;
