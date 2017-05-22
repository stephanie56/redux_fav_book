export function selectbook (book) {
  return {
    type:'SELECTED_BOOK',
    payload:book
  };
}

export function likebook (bool) {
  return {
    type: 'LIKE_BOOK',
    payload:bool
  };
}


// /* Action Creators */
// export function booklist() {
//   return (dispatch) => {
//     dispatch(selectbook());
//   }
// }
