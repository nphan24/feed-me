import React, { Component } from 'react';
import { fetchData } from './Api/ApiCalls/fetchData';
import {cleanRecipes} from './Api/helper/cleanRecipes';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const mealData = await fetchData();
    const recipes = await cleanRecipes(mealData);
    console.log ('recipes', recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Husband Should Cook This To Feed-Me</h1>
        </header>
      </div>
    );
  }
}



export default App;
