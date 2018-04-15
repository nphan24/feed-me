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
      <select id="dropdown" onChange=
        {this.handleChange}>
        <option value="Categories">Categories</option>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="appetizer">appetizer</option>
        <option value="chicken">chicken</option>
        <option value="beef">beef</option>
        <option value="lamb">lamb</option>
        <option value="seafood">seafood</option>
        <option value="pork">pork</option>
        <option value="smoothies">smoothies</option>
        <option value="snacks">snacks</option>
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