import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { createGlobalStyle } from 'styled-components';
import VirgoFont from './fonts/virgo.ttf';
import Banner from './Components/Banner/Banner';
import Cv from './Pages/Cv/Cv';
import Competence from './Pages/Compétence/Compétence';
import Contact from './Pages/Contact/contact'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Virgo';
    src: url(${VirgoFont}) format('truetype');
  }

  body {
    background-color: #3e3b38;
    color: white;
    font-family: 'Virgo', sans-serif;
    text-shadow: white 1px 0 3px;
  }

  a {
    color: red;
    text-decoration: none;
    text-shadow: red 1px 0 10px;
  }

  a:hover {
    text-shadow: red 1px 10px 10px;
  }
`;

 

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
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