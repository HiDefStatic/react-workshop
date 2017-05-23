import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard imagesrc={"https://assets.yandycdn.com/HiRez/RC_880738_C2013.jpg"} titleText={"Hi, I'm Sexy Pizza Guy"} subtext={"A just-outside-of-the-box pizza boy with a penchant for pepperoni and long walks on the beach"} />
          </div>
          <div className='col-md-8'>
            <Content />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
