import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';

describe('Card', () => {
  let wrapper;
  let mockRecipe = mock.mockRecipe;
  let mockaddFavorite = jest.fn();
  let mockremoveFavorite = jest.fn();
  let mockFavoritesToAdd = [{ 
    name: 'pasta', 
    image: 'url', 
    totalTime: '30', 
    id: 2 
  }];
  let mockFavorites = [{ 
    name: 'pasta', 
    image: 'url', 
    totalTime: '30', 
    id: 4 
  }];

  beforeEach(()=> {
    wrapper = shallow(<Card 
      recipe={mockRecipe}
      favorites={mockFavoritesToAdd}
      removeFavorite={mockremoveFavorite}
      addFavorite={mockaddFavorite}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call removeFavorite in toggleFavorite if the ids match', () => {
    wrapper.find('button').simulate('click');
    expect(mockremoveFavorite).toHaveBeenCalledWith(2);
  });

  it('should call addFavorite in toggleFavorite if there are no matches', () => {
    wrapper = shallow(<Card 
      recipe={mockRecipe} 
      favorites={mockFavorites} 
      removeFavorite={mockremoveFavorite} 
      addFavorite={mockaddFavorite} 
    />);
    wrapper.find('button').simulate('click');
    expect(mockaddFavorite).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should map favorites to props', () => {
    const state = {favorites: mock.favorites};
    const expected = mock.favorites;
    const mapped = mapStateToProps(state);
    expect(mapped.favorites).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the correct params on addFavorites', () => {
    const mockDispatch = jest.fn();
    const recipe = mock.mockRecipe;
    const expected = Actions.addFavorite(recipe);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addFavorite(recipe);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should call dispatch with the correct params on removeFavorites', () => {
    const mockDispatch = jest.fn();
    const id = 24;
    const expected = Actions.removeFavorite(id);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeFavorite(id);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});