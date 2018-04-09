import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import CardContainer from '../CardContainer/CardContainer';
import * as Actions from '../../Actions';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';

import './App.css';

export class App extends Component {
  async componentDidMount() {
    const recipes = await fetchRandomRecipes();
    this.props.postRecipes(recipes);
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <NavLink to="/" className="App-title">
            Feed-Me
        </NavLink>
        <Nav />
        <NavLink className="view-favorites-button" to="/favorites">
            View Favorites
        </NavLink>
        {/* <NavLink className="view-button" to="/breakfast">
              Breakfast
        </NavLink>
        <NavLink className="view-button" to="/lunch">
              Lunch
        </NavLink>
        <NavLink className="view-button" to="/dinner">
              Dinner
        </NavLink> */}
      </header>
      <CardContainer />
    </div>;
  }
}

// export const mapStateToProps = state => ({
//   recipes: state
// });

export const mapDispatchToProps = dispatch => ({
  postRecipes: recipes => dispatch(Actions.postRecipes(recipes))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
