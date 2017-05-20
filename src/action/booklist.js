export function selectbook (book) {
  return {
    type:'SELECTED_BOOK',
    payload:book
  };
}


// /* Action Creators */
// export function booklist() {
//   return (dispatch) => {
//     dispatch(selectbook());
//   }
// }
