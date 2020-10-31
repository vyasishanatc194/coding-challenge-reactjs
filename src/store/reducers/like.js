import * as actionType from '../actions/actionTypes';

const initialState = {
  likes: 0,
};

const setLikes = (state, action) => ({
  ...state,
  likes: action.likes,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LIKES:
      return setLikes(state, action);
    default:
      return state;
  }
};

export default reducer;
