import React from 'react';
import ReactDOM from 'react-dom';

function OurGreeting(props) {
  return (
    <p>
      Our Greeting: {props.greeting.message}
    </p>
  );
}

function App(props) {
  const messages = props.greetings.map(greeting => (
        <OurGreeting 
          key={greeting.id}
          greeting={greeting}
        />
      ));

  return (
    <div>
      <h1>Header!</h1>
      {messages}
    </div>
  );    
}

const greetings = [
  { id: 'A', message: 'Hola!' },
  { id: 'B', message: 'Hello!' },
  { id: 'C', message: 'Anyong!' }
];
 
ReactDOM.render(
  <App greetings={greetings} />,
  document.getElementById('root')
);
