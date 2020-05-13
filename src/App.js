import React from 'react';
//import logo from './logo.svg';
import './App.css';


class RandCom extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      quote: '',
      author: '',
      index:0
    }
    this.changeQuote = this.changeQuote.bind(this);
    this.newAuthor = this.newAuthor.bind(this);
  }
  changeQuote(){
    this.setState({
      quote: this.state.quote,
      author: this.state.author,
      index: Math.floor(Math.random()*10)
    });
  }
  newAuthor(){
    this.setState({
      quote: this.state.quote,
      author: this.state.author
    });
  }
  
  render(){
    const randQuote = [
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      "Be yourself; everyone else is already taken.",
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "So many books, so little time.",
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      "A room without books is like a body without a soul.",
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      "You only live once, but if you do it right, once is enough.",
      "Be the change that you wish to see in the world.",
    ];
    const randAuth = [
      "Marilyn Monroe",
      "Oscar Wilde",
      "Albert Einstein",
      "Frank Zappa",
      "Bernard M. Baruch",
      "Marcus Tullius Cicero",
      "William W. Purkey",
      "Dr. Seuss",
      "Mae West",
      "Mahatma Gandhi"
    ];
    const firstQuote = randQuote[this.state.index];
    const firstAuthor = randAuth[this.state.index];
    
    return (
      <div className="container-fluid" id="quote-box">
        <div className="quote-text">
          <i className="fa fa-quote-left"></i><span id="text" onChange={this.changeQuote} value={this.state.quote}>{firstQuote}</span>
        </div>
        <div className="quote-author">
          - <span id="author" onChange={this.newAuthor} value={this.state.author}>{firstAuthor}</span>
        </div>
        <div className="row">
          <a href={'https://twitter.com/intent/tweet?text=firstQuote--firstAuthor'} id="tweet-quote" target="_blank" rel="noopener noreferrer">
            <div className="col-xs-6">
              <button className="btn btn-default">
                <i className="fa fa-twitter"></i> Tweet
              </button>
            </div>
          </a>
          <div className="col-xs-6" id="n-quote">
            <button className="btn btn-default" id="new-quote" onClick={this.changeQuote}>
              <i className="fa fa-info-circle"></i> New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}
//ReactDOM.render(<RandCom/>, document.getElementById('root'));

export default RandCom;





/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello React!</h1>
        <p>Current React Version: {React.version}</p>
        </header>
    </div>
  );
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />
        /*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/
      