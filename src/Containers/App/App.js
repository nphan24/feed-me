import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import CardContainer from '../CardContainer/CardContainer';
import * as Actions from '../../Actions';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const recipes = await fetchRandomRecipes();
    console.log('final in app', recipes);
    this.props.postRecipes(recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Husband Should Cook This To Feed-Me</h1>
        </header>
        <CardContainer />
      </div>
    );
  }
}

// export const mapStateToProps = state => ({
//   recipes: state
// });

export const mapDispatchToProps = dispatch => ({
  postRecipes: recipes => dispatch(Actions.postRecipes(recipes))
});

export default connect(null, mapDispatchToProps)(App);
