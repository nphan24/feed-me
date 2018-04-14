import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import CardContainer from '../CardContainer/CardContainer';
import DropDown from '../../Components/DropDown/DropDown';
import * as Actions from '../../Actions';
import { NavLink, withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import './App.css';

const topIcon = require('../../assets/top-icon.svg');
export class App extends Component {
  async componentDidMount() {
    const recipes = await fetchRandomRecipes();
    this.props.postRecipes(recipes);
  }

  handleLogout = () => {
    auth.doSignOut();
    this.props.history.push('/');
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink 
            to="/" 
            className="App-title">
            <img src={topIcon} className="top-icon"/>
            Feed-Me
          </NavLink>
          <NavLink 
            className="view-favorites-button" to="/favorites">
            View Favorites
          </NavLink>
          {this.props.user.email && 
          <button  className="logout-button" 
            onClick={this.handleLogout}>
            Logout
          </button>}
          {!this.props.user.email && <Nav />}
          <DropDown />
        </header>
        <CardContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  postRecipes: recipes => dispatch(Actions.postRecipes(recipes)),
  logoutUser: user => dispatch(Actions.logoutUser(user))
});

App.propTypes = {
  postRecipes: PropTypes.func,
  history: PropTypes.object,
  logoutUser: PropTypes.func,
  user: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
