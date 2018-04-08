import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import Card from '../Card/Card';
import './CardContainer.css';

export const CardContainer = props => {
  const cardType = props.location.pathname === '/favorites' ? 'favorites': 'recipes';

  let renderCards;
  
  if (props.recipes.length === 0) {
    renderCards = (<p>Loading...</p>);
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

  return (
    <section>
      <Switch>
        <Route 
          exact path='/' 
          render={()=> { 
            return <div className='card-container'>
              {renderCards}</div>;
          }}/>
        <Route 
          exact path='/favorites'
          render={()=> {
            return <div className='card-container'>
              {renderCards}</div>;
          }}/>
      </Switch>
    </section>
  );
};

export const mapStateToProps = state => ({
  recipes: state.recipes,
  favorites: state.favorites
});

export default withRouter(connect(mapStateToProps)(CardContainer));