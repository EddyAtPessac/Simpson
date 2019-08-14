import React from 'react';
import logo from './logo.svg';
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  };

  handleClick = () => {
    this.setState({  working: !this.state.working });
  }

  render() {
    const work = this.state.working ? 'Working' : 'Reposing';
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo}  className={work} alt="logo"/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
            <Lamp on/>
            <Lamp/>
            <button
                onClick={this.handleClick}
                value={work}>{work}
            </button>
            <Quotes/>

          </header>
        </div>
    );
  }
}
// onClick={this.setState({ working: !this.state.working });}
//className={light}>{light.toUpperCase()}
export default App;
