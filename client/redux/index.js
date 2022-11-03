import axios from 'axios';

const GET_ITEMS = 'GET_ITEMS';
const CREATE_ITEM = 'CREATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// ACTION CREATORS
export const _getItems = (items) => {
  return {
    type: GET_ITEMS,
    items,
  };
};

export const _createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item,
  };
};

export const _deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    item,
  };
};

// THUNKS
export const getItems = (items) => {
  return async (dispatch) => {
    try {
      const { data: allItems } = await axios.get('/api/items');
      dispatch(_getItems(allItems));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

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

export const deleteItem = (item) => {
  return async (dispatch) => {
    try {
      const { data: oldItem } = await axios.delete(
        `/api/items/${item.id}`,
        item
      );
      dispatch(_deleteItem(oldItem));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

function reducer(state = [], action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    case CREATE_ITEM:
      return [...state, action.item];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.item.id);
    default:
      return state;
  }
}

export default reducer;
