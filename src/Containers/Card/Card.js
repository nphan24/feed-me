import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Actions/';
import './Card.css';

export const Card = ({
  recipe, 
  favorites, 
  addFavorite, 
  removeFavorite 
}) => {
  const { name, image, totalTime, source } = recipe;
  const cardClass = favorites.find(fav => fav.name === recipe.name) ? 'selected' : '';
  
  const toggleFavorite = (recipe) => {
    if (!favorites.find(fav => fav.id === recipe.id)) {
      addFavorite(recipe);
    } else {
      removeFavorite(recipe.id);
    }
  };

  return (
    <div className='recipe-card'>
      <p>{name}</p>
      <button 
        className={`favorite-button ${cardClass}`}
        onClick={()=> toggleFavorite(recipe)}>
        <span role='img' aria-labelledby='favorite star' className='favorites-image'>
        &#x2B50;
        </span>
      </button>
      <img src={image} className="recipe-image" alt='recipe'/>
      <p>Total cook time: {totalTime} mins</p>
      <a href={source} target="..blank" className='link-instructions'>
        Make This!
      </a>
    </div>
  );
};

export const mapStateToProps = state => ({ 
  favorites: state.favorites 
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: recipe => dispatch(Actions.addFavorite(recipe)),
  removeFavorite: id => dispatch(Actions.removeFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);



