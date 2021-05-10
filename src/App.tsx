import React, { Component } from 'react';
import './App.css';
import { Character } from './types'

interface IAppState{
  name: string;
  characters: Character[];
}

class App extends Component<{}, IAppState> {

  constructor(props: {}){
    super(props)
    this.state = {
      name: 'jr',
      characters: []
    }
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(({results}) => this.setState({characters: results as []}))
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
