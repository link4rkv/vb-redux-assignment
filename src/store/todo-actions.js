import axios from 'axios';

export const getTodoList = () => {
  return async (dispatch) => {
    axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    ).then(response => {
      console.log('data has been received.')
      const lists = response.data.map(list => list.title);
      dispatch({
        type: 'FETCH_LIST',
        payload: lists
      })
    }).catch(error =>{

    })
  }
} 