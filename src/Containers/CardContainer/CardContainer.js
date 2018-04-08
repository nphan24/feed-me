import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = props => {
  let renderCards;

  if (props.recipes) {
    renderCards = props.recipes.map(recipe => {
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
      {props.recipes &&
      <div className='card-container'>
        {renderCards}
      </div>
      }
    </section>
  );
};

export const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(CardContainer);