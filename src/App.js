import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import React from 'react'; // só conseguimos criar components importanto este módulo.

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Lista de compras para {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className='square'>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i}/>;
  }
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post title="Como conquistar o planeta?"/>
        <Post title="Como conquistar o planeta?"/>
        <Post title="Como conquistar o planeta?"/>
        <Post title="Como conquistar o planeta?"/>
        <Post title="Como conquistar o planeta?"/>
        <Post title="Como conquistar o planeta?"/>
        
      </header>
    </div>
  );
}

export default App;
