import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import * as mock from '../../mockData/mockData';
import * as Actions from '../../Actions';

// describe('App', () => {
//   let wrapper;
//   let recipes;
//   let postRecipes;

//   beforeEach (() => {
//     recipes = mock.mockRecipe;
//     postRecipes = jest.fn();
//     wrapper = shallow(<App 
//       recipes={recipes} 
//       postRecipes={postRecipes} 
//     />, {
//       disableLifecycleMethods: false
//     });
//   });

//   it('should match the snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

describe('mapDispatchToProps', () => {
  it('should call dispatch with the correct params in postRecipes', () => {
    const mockDispatch = jest.fn();
    const recipe = mock.mockRecipe;
    const expected = Actions.postRecipes(recipe);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.postRecipes(recipe);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
