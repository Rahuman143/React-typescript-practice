import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Componts/Greet';
import Contact from './Componts/Contact';
import ContactList from './Componts/ContactList';
import Staus from './Componts/Staus';
import Heading from './Componts/Heading';

function App() {
  const contactName= {
    firstName : 'rahu',
    lastName: 'man'
  }
  const nameDetails =[
    {
      firstName : 'Muthu',
      lastName: 'Kumar'
    },
    {
    firstName : 'Vijay',
    lastName: 'Bhaskar'
    }
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greet name="rahu" age ={24} isLogin={true} />
      <Contact name={contactName} />
      <ContactList name={nameDetails} />
      <Staus status='Success'/>
      <Heading>Text</Heading>
    </div>
  );
}

export default App;
