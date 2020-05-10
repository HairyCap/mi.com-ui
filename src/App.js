import React from 'react';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import HomeToolBar from './components/homeToolBar/homeToolBar';
import MainPage from './components/mainpage/mainpage'
import Footer from './components/footer/footer'
import Info from './components/info/info'
import './App.css';


const damiCard = {
  title: "小米「小爱老师」",
  description: "英语提分利器",
  price: "429元起",
  prePrice: "499元"
}


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <HomeToolBar></HomeToolBar>
      <Header></Header>
      <Hero></Hero>
      <MainPage/>
      <Footer/>
      <Info/>
    </div>
  );
}

export default App;


