import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greetings from './Greetings';
import TodoList from './TodoList';

class App extends React.Component{
  render() {
    const person = {name: "sunandar", age:"27"}
    return (
      <div>
        <Greetings person={person} value={9} />
        {/* <Greetings name="oday"/> */}

      <TodoList/>
      </div>
    );
   
  }
}

export default App;
