import axios from 'axios';

const CREATE_ITEM = 'CREATE_ITEM';

// ACTION CREATOR
export const _createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item,
  };
};

// THUNK
export const createItem = (item) => {
  return async (dispatch) => {
    try {
      const { data: newItem } = await axios.post('/api/items', item);
      dispatch(_createItem(newItem));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

function reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ITEM:
      return action.item;
    default:
      return state;
  }
}

export default reducer;
