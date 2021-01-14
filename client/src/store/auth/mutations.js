/*
export function someMutation (state) {
}
*/

export const AUTH_SUCCESS = (state, token) => {
  state.status = 'success'
  state.token = token;
}

export const AUTH_ERROR = (state) => {
  state.status = 'error'
}
