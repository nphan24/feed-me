import React, {Component} from 'react';
import './DropDown.css';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import { connect } from 'react-redux';
import * as Actions from '../../Actions';
import PropTypes from 'prop-types';
export class DropDown extends Component {

  handleChange = async (event) => {
    const recipes = await fetchRandomRecipes(event.target.value);
    this.props.replaceRecipes(recipes);
  };

  render() {
    return <div>
      <select id="dropdown" 
        onChange={this.handleChange}
        className='dropdown-menu'>
        <option value="Categories">Categories</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="lamb">Lamb</option>
        <option value="seafood">Seafood</option>
        <option value="pork">Pork</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="smoothies">Smoothies</option>
        <option value="snacks">Snacks</option>
      </select>
    </div>;
  }
}

export const mapDispatchToProps = dispatch => ({
  replaceRecipes: recipes => dispatch(Actions.replaceRecipes(recipes))
});

DropDown.propTypes = {
  replaceRecipes: PropTypes.func
};

export default (connect(null, mapDispatchToProps)(DropDown));