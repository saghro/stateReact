import React, { Component } from 'react';
import './App.css';
import logo from './images/yuba_ph.JPG';

class App extends Component {
  state = {
    person: {
      fullName: "yuba SAGHRO",
      bio: "I graduated with a fundamental license at FP Ouarzazate in Mathematics and Computer Science. Currently, I am following a training course at Orange Digitale center within the Web development department.",
      imgSrc:logo,
      profession: "Web Developer"
    },
    shows: false,
    intervalId: null,
    timer: 0
  }

  toggleProfile = () => {
    if (!this.state.shows) {
      this.startTimer();
    } else {
      clearInterval(this.state.intervalId);
      this.setState({ timer: 0 });
    }
    this.setState({ shows: !this.state.shows });
  }

  startTimer = () => {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    if (this.state.shows) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    const { person, shows, timer } = this.state;
    return (
      <div className="container">
        <button className="toggle-button" onClick={this.toggleProfile}>
          {shows ? "Masquer Profil" : "Montre Profile"}
        </button>
        {shows &&
          <div className="profile">
            <img className="profile-image" src={person.imgSrc} alt="Profile" />
            <h1 className="profile-name">{person.fullName}</h1>
            <h2 className="profile-profession">{person.profession}</h2>
            <p className="profile-bio">{person.bio}</p>
            <p className="mounted-time">Timer: {timer}s</p>
          </div>
        }
      </div>
    );
  }
}

export default App;