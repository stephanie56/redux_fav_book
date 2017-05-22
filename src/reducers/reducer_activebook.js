
export default function(state = null, action) {
  switch (action.type) {
    case 'SELECTED_BOOK':
      return action.payload;
    case 'LIKE_BOOK':
      return !action.payload.favorite;
    default:
      return state;
  }
}
