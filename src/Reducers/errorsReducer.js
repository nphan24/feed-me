const errorReducer = (state = false, action) => {
  switch (action.type) {
  case 'PROMPT_SIGNIN':
    return action.error;
  default:
    return state;
  }
};

export default errorReducer;