import { PageChange, mapDispatchToProps } from './PageChange';
import * as mock from '../../mockData/mockData';
import { shallow } from 'enzyme';
import React from 'react';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import * as Actions from '../../Actions';
jest.mock('../../Api/ApiCalls/fetchRandomRecipes');

describe('PageChange', () => {
  let wrapper;
  let mockreplaceRecipes = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<PageChange replaceRecipes={mockreplaceRecipes} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchRandomRecipes on seeMore', async () => {
    const mockincreasePage = 30;
    wrapper.instance().seeMore(mockincreasePage);
    await expect(fetchRandomRecipes).toHaveBeenCalled();
  });

  it('should call replaceRecipes on seeMore', () => {
    const mockincreasePage = 30;
    wrapper.instance().seeMore(mockincreasePage);
    expect(mockreplaceRecipes).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with the correct params on replaceRecipes', () => {
    const mockDispatch = jest.fn();
    const recipe = mock.mockRecipe;
    const expected = Actions.replaceRecipes(recipe);
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.replaceRecipes(recipe);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
