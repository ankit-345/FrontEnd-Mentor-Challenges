import React from 'react'
import backgroundImage from "./images/bg-intro-desktop.png";
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

const MainComponent = () => {

  return (
    <>
    <picture className="bg-image" >
    <source type="../image/png"
      srcSet="../images/?width=100 100w, ../images/bg-intro-desktop.png?width=200 200w, ../images/bg-intro-desktop.png?width=400 400w, ../images/bg-intro-desktop.png?width=800 800w" />
    <img src={backgroundImage} alt="background-image" style={{width: "100%", aspectRatio: "16/9"}}
      fetchpriority="high" />
  </picture>
  <main className="container">
    <LeftComponent />
    <RightComponent />
  </main>
  </>
  )
}

export default MainComponent