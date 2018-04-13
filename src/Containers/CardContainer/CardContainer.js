import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Card from '../Card/Card';
import './CardContainer.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const loading = require('../../assets/loading.gif');
const noFavorites = require('../../assets/favorites.gif');

export const CardContainer = props => {
  const cardType = props.location.pathname === '/favorites' ? 'favorites': 'recipes';

  let renderCards;
  
  if (props.recipes.length === 0) {
    renderCards = (
      <div>
        <p className='loading-comment'>
          Loading...
        </p>
        <img className='loading-gif'src={loading} alt='loading'/>
      </div>
    );
  } else if (props.location.pathname === '/favorites' && props.favorites.length === 0) {
    renderCards = <div>
      <p className="loading-comment">There are no favorites!</p>
      <img className="nofavorites-gif" src={noFavorites} alt="no favorites" />
    </div>;
  } else { 
    renderCards = props[cardType].map(recipe => {

      return (
        <Card 
          key={recipe.name}
          recipe={recipe}
        />
      );
    });
  }

  return <section className='card-container-section'>
    <Switch>
      <Route exact path="/" render={() => {
        return <div className="card-container">{renderCards}</div>;
      }} />
      <Route exact path="/favorites" render={() => {
        return (
          <div className="card-container">{renderCards}</div>
        );
      }} />
      <Route exact path={routes.LOGIN} component={Login} />
      <Route exact path={routes.SIGN_UP} component={SignUp} />
    </Switch>
  </section>;
};

export const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites
});

export default withRouter(connect(mapStateToProps)(CardContainer));