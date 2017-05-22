export function selectbook (book) {
  return {
    type:'SELECTED_BOOK',
    payload:book
  };
}

export function likebook (book) {
  return {
    type: 'LIKE_BOOK',
    payload: book
  };
}


// /* Action Creators */
// export function booklist() {
//   return (dispatch) => {
//     dispatch(selectbook());
//   }
// }
