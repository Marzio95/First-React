// IMPORT
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Users from './features/users/Users';
import CardCustom from './shared/bootstrap/card-custom/CardCustom';
import Button from './shared/design/button/Button';
import {test as t} from './shared/design/button/Button';

// FUNZIONE APP 
function App () {

  // HOOKS 
  const [display, setDisplay] = useState(false); // display = false, cioè il valore iniziale dello state
  const [name, setName] = useState('John Doe');
  const [surname, setSurname] = useState('Della Rocca');

  useEffect ( () => {
    console.log('dentro use effect');
  }, [display]); // se aggiungo un array in questo modo ed inserisco una variabile, ogni volta che la variabile cambia il valore, la funzione viene eseguita

  const clickAction = () => {setDisplay(!display)}

  return (
    <div className="App">
        <h1>My name is: {name}</h1>
        <h1>My surname is: {surname}</h1>
        <h2>{t}</h2>

        <Button text="save" classBt="btn-secondary" clickAction={() => console.log('clicked by you')}>
            <span>Clicked by you</span>
        </Button>
        <Button text={display ? 'Nascondi' : 'Mostra'} clickAction={clickAction}></Button>
        <Button text="push"/>

        <div>{display ? <div>{8 +8}</div> : 'NON VISUALIZZARE NUMERI'}</div> {/* ternario dinamico in html */}

        {display && <CardCustom title="test">

            <h1>Card di esempio</h1>

            <CardCustom title="test" classList={['bg-primary']} headerClass={['text-white']} bodyClass={['text-danger']}>
                <h2>Sezione A</h2>
            </CardCustom>

            <CardCustom title="test">
                <h2>Sezione B</h2>
            </CardCustom>

        </CardCustom>}

        <Users></Users>

    </div>
  )
}

export default App;
