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
    mountedAt: null,
    intervalId: null
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    this.setState({ mountedAt: new Date() });
    const intervalId = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person, shows, mountedAt } = this.state;
    return (
      <div className="container">
        <button className="toggle-button" onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows &&
          <div className="profile">
            <img className="profile-image" src={person.imgSrc} alt="Profile" />
            <h1 className="profile-name">{person.fullName}</h1>
            <h2 className="profile-profession">{person.profession}</h2>
            <p className="profile-bio">{person.bio}</p>
          </div>
        }
        <p className="mounted-time">Component mounted at {mountedAt && mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;