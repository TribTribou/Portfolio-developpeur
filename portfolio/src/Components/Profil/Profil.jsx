import React from 'react';
import styled, { keyframes } from 'styled-components'
import ProfilPicture from '../../images/Profil_picture.jpg'
import TypingText from '../Animations/TypingText'

const floatAnimation = keyframes`
0% { top:28%; }
25% { top:27%;}
75% { top:29%; }
100% { top:28%;}
`

const ProfileContainer = styled.div`
  position: relative;
  height:85vh;
  padding: 7% 1% 1% 1%;
  text-align: center;
  /* Ajoutez d'autres styles selon vos besoins */
`;

const ProfileImage = styled.img`
  border: 0.8vh solid black;
  box-shadow: red 1px 0 1.2vw 0.5vw;
  border-radius: 50%;
  max-width: 200px;
  position: absolute;
  top:28%;
  right:6%;
  animation-name: ${floatAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  /* Ajoutez d'autres styles selon vos besoins */
`;

const ProfileDescription = styled.p`
  background: #000000B3;
  border-radius: 20vh;
  max-width: 100%;
  height: 40vh;
  color: white;
  font-size: 2.9vh;
  padding: 5% 20% 0 0;
  margin: 5% 2% 5% 2%;
  /* Ajoutez d'autres styles selon vos besoins */
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
    <ProfileContainer>
      <ProfileImage src={ProfilPicture} alt="Image d'un renard dans un champ de lavande" />
      <ProfileDescription>
        <TypingText/>
      </ProfileDescription>
      <ProfileButton onClick={handleButtonClick}> | <br/> V</ProfileButton>
    </ProfileContainer>
  );
}

export default ProfileBlock;
