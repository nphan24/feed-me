import React, {Component} from 'react';
import { fetchRandomRecipes } from '../../Api/ApiCalls/fetchRandomRecipes';
import { connect } from 'react-redux';
import * as Actions from '../../Actions';
import PropTypes from 'prop-types';
import './PageChange.css';


export class PageChange extends Component {

  seeMore = async () => {
    let increasePage = 30;
    const recipes = await fetchRandomRecipes(increasePage);
    this.props.replaceRecipes(recipes);
  }

  render() {
    return (
      <div className="pages">
        <button 
          className="see-pages"
          onClick={this.seeMore}>See More Recipes
        </button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  replaceRecipes: recipes => dispatch(Actions.replaceRecipes(recipes))
});

PageChange.propTypes = {
  replaceRecipes: PropTypes.func
};

export default (connect(null, mapDispatchToProps)(PageChange));
