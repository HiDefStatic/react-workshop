import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const selector = {
home: <Home />,
about: <About />,
contact: <Contact />
};

class App extends Component {


  constructor() {
    super();
    this.state = {
      content: "home"
    };
  }

  getPage() {
    return selector[this.state.content]
  }

  handleClick(event) {
      this.setState({
        content: event.target.id
      });
  }

  render() {
    return (
      <div className="App">

        <Navbar onClick={(event) => this.handleClick(event)} />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard imagesrc={"https://assets.yandycdn.com/HiRez/RC_880738_C2013.jpg"} titleText={"Hi, I'm Sexy Pizza Guy"} subtext={"A just-outside-of-the-box pizza boy with a penchant for pepperoni when I'm feeling saucy."} />
          </div>
          <div className='col-md-8'>
            {this.getPage()}

          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
