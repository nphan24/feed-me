const usersReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return Object.assign({}, state, action.user);
  default:
    return state;
  }
};

export default usersReducer;
