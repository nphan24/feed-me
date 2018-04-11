const usersReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return Object.assign({}, state, action.user);
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};

export default usersReducer;
