import React from 'react';
//import logo from './logo.svg';
import './App.css';
import GetNewQuoteBt from "./GetNewQuoteBt";
import DisplayQuote from "./DisplayQuote";

const cstQuote =

      {
        "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
        "character": "Nelson Muntz",
        "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
        "characterDirection" : "Left"
      };



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      curentQuote: cstQuote,   // Default quote: our constant
        work:"toto"
    };
  };

  handleClick = () => {
      this.setState({work: "clac"});
    this.setState({curentQuote:  cstQuote  });
  }

    getNewApiQuote() {
        this.setState({work: "click"});
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response  =>  response.json())
            .then(data  => {
                // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
                this.setState({ curentQuote:  data[0],
                });
                console.log(data);
            });

    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
{/*
            <img src={logo} className="App-logo" alt="logo"/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
*/}
              <h4>Please, be indulgent, the simpson quotes Api <br/>does not work every time...</h4>
<br/>
            <GetNewQuoteBt selectQuote={()=>this.getNewApiQuote()} />
          <br/>
              <button
                    onClick={this.handleClick} >
                       *  re-initialize  *
              </button>
            <DisplayQuote quoteObj={this.state.curentQuote}/>

          </header>
        </div>
    );
  }
}
// onClick={this.setState({ working: !this.state.working });}
export default App;
