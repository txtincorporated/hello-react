import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function OurGreeting(props) {
  return (
    <p>
      Our Greeting: {props.greeting.message}
    </p>
  )
}

function App(props) {
  const messages = props.greetings.map(greeting => (
        <p key={greeting.id}>
          {greeting.message}
          </p>
        ))}

const greetings = [
  {A: 'Hola!'},
  {B: 'Hello!'},
  {C: 'Anyong!'}
]
 
ReactDOM.render(
  ourApp,
  document.getElementById('root')
);
