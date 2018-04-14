import { CardContainer, mapStateToProps } from '../CardContainer/CardContainer';
import { shallow } from 'enzyme';
import React from 'react';
import * as mock from '../../mockData/mockData';

describe('CardDontainer', () => {
  let wrapper;
  let mockRecipes = [mock.mockRecipe];
  let mockFavorites = mock.favoritesArray;
  let mockLocation = {pathname: 'favorites'};

  beforeEach(()=> {
    wrapper = shallow(<CardContainer 
      recipes={mockRecipes}
      favorites={mockFavorites}
      location={mockLocation}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {

  it('should map recipes to props', ()=> {
    const favorites = mock.favoritesArray;
    const expected = favorites;
    const state = { favorites };
    const mapped = mapStateToProps(state);
    expect(mapped.favorites).toEqual(expected);
  });

  it('should map favorites to props', () => {
    const recipes = mock.mockRecipes;
    const expected = recipes;
    const state = { recipes };
    const mapped = mapStateToProps(state);
    expect(mapped.recipes).toEqual(expected);
  });
});