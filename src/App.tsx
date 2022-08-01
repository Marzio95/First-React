// IMPORT
import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Button from './shared/design/button/Button';
import {test as t} from './shared/design/button/Button';

// VARIABILI che successivamente verranno passate allo state tipo vue
const name: string | number = 'John Doe'; // string | number è un OR per i tipi di variabile
let surname: any = 'Della Rocca'; // surname = 10; potrei cambiare il valore di surname in numero grazie al type any che non prevede un tipo preciso di dato
// let display = false;

// FUNZIONI che successivamente verranno passate nella class App tipo vue
// const clickAction = () => {display = true; console.log('display: ' + display);}


// FUNZIONE APP 
class App extends Component {

  state = {
    display: false,
    name: 'John Doe',
    surname: 'Della Rocca', 
    users: []
  }

  // CHIAMATA AD UN API CON UN METODO ASINCRONO (FETCH)
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
          .then(res => this.setState({users: res}))
  }

  clickAction = () => {this.setState({display: !this.state.display}); console.log('display: ' + this.state.display)}

  render() {
    return (
      <div className="App">
          <h1>My name is: {this.state.name}</h1>
          <h1>My surname is: {this.state.surname}</h1>
          <h2>{t}</h2>

          <Button text="save" classBt="btn-secondary" clickAction={() => console.log('clicked by you')}>
              <span>Clicked by you</span>
          </Button>
          <Button text="Mostra o Nascondi" clickAction={this.clickAction}></Button>
          <Button text="push"/>

          <div>{this.state.display ? <div>{8 +8}</div> : 'non visualizzare numeri'}</div> {/* ternario dinamico in html */}

          {this.state.users.map((user: any) => <div>{user.name}</div>)}
      </div>
    )
  };
}

export default App;
