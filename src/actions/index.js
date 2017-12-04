export const FETCH_SUCCESS = "FETCH_SUCCESS";
// export const CHANGE_AMOUNT = "CHANGE_AMOUNT";
// export const DELETE_PRODUCT = "DELETE_PRODUCT";

// export const changeAmount = (id, amount, quantity) => ({
//   type: CHANGE_AMOUNT,
//   id,
//   amount,
//   quantity
// });

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data: data
});

// export const deleteProduct = (id) => ({
//   type: DELETE_PRODUCT,
//   id
// });

export const fetchData = () => dispatch => {
  fetch('http://backoffice.aviasales.ru/api/statistics?interval=1d&from=2017-09-04&to=2017-09-07', {
    headers: {
      "Authorization": "Bearer eyJpYXQiOjE1MDkzNDEzNzgsImFsZyI6IkhTMjU2IiwiZXhwIjoxNTQwNDQ1Mzc4fQ.eyJpZCI6MTI2NiwicGVybWlzc2lvbnMiOlsiQmFzaWMgUmVwb3J0cyJdLCJnYXRlX2lkIjotMTQzLCJleHAiOiIyMDE4LTEwLTI1IDA1OjI5OjM4In0.dD_So803EIkRM86ARm1RxPy85lzNse2hNaPMjndkPpg"
    }})
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          return response.json()
      .then(responseData => {
          dispatch(fetchSuccess(responseData));
        });
      })
      .catch((err) => console.log('Fetch Error :-S', err));
}