import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { createGlobalStyle } from 'styled-components';
import VirgoFont from './fonts/virgo.ttf';
import Banner from './Components/Banner/Banner';
import Cv from './Pages/Cv/Cv';
import Competence from './Pages/Compétence/Compétence';
import Contact from './Pages/Contact/contact';
import BackgroundLightbarblur from './Components/BackgroundAnimated/Background';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Virgo';
    src: url(${VirgoFont}) format('truetype');
  }

  body {
    background: radial-gradient(#444141f0,#282828cc);
    color: white;
    font-family: 'Virgo', sans-serif;
    text-shadow: white 1px 0 1.2vw;
    max-width: 100%;
    margin: 0 auto;
    font-size: 1.2vw;
  }

  a {
    color: red;
    text-decoration: none;
    text-shadow: red 1px 0 1.2vw;
  }

  a:hover {
    text-shadow: red 1px 1.2vw 1.2vw;
  }
`;

 

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BackgroundLightbarblur/>
        <Router>
            <Banner />
            <Routes>
                <Route path="/Portfolio-developpeur/" element={<Home />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/competences" element={<Competence />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)


export default GlobalStyle;