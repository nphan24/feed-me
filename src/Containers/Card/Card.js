import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Actions/';
import PropTypes from 'prop-types';
import { db } from '../../firebase';
import './Card.css';

export const Card = ({
  recipe, 
  favorites, 
  addFavorite,
  removeFavorite,
  user 
}) => {
  const { name, image, totaltime, source } = recipe;
  const cardClass = 
    favorites.find(fav => fav.name === recipe.name) ? 'selected' : '';
  
  const toggleFavorite = (recipe) => {
    if (!favorites.find(fav => fav.id === recipe.id)) {
      addFavorite(recipe);
      // db.addFavoriteToDB(user.uid, recipe );
    } else {
      removeFavorite(recipe.id);
      // db.removeFavoriteFromDB(user.id, recipe.id);
    }
  };

  return (
    <div className='recipe-card'>
      <button 
        className={`favorite-button ${cardClass}`}
        onClick={()=> toggleFavorite(recipe)}>
        <span role='img' 
          aria-labelledby='favorite star' 
          className='favorites-image'>
        &#x2B50;
        </span>
      </button>
      <img src={image} className="recipe-image" alt='recipe'/>
      <p className='recipe-name'>{name}</p>
      <p className='recipe-cooktime'>Total cook time: {totaltime} mins</p>
      <a href={source} target="..blank" className='link-instructions'>
        Make This!
      </a>
    </div>
  );
};

export const mapStateToProps = state => ({ 
  favorites: state.favorites,
  user : state.user
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: recipe => dispatch(Actions.addFavorite(recipe)),
  removeFavorite: id => dispatch(Actions.removeFavorite(id))
});

Card.propTypes = {
  removeFavorite: PropTypes.func,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array,
  recipe: PropTypes.object,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);



