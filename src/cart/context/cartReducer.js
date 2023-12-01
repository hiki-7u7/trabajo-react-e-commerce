export const cartReducer = ( state, action ) => {

  switch (action.type) {
    case 'add-item':
        return {
          ...state,
          items: [...state.items, action.payload],
        }
    case 'remove-item':
      return {
        ...state,
        items: action.payload,
      }
    
    case 'update-item-quantity':
      return {
        ...state,
        items: action.payload,
      }

    case 'reset-cart':
      return {
        ...state,
        items: []
      }

    default:
      return state;
  }

}