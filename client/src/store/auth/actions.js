/*
export function someAction (context) {
}
*/
import axios from 'axios';

// const authUrl = 'http://213.189.216.109:1337/auth/local';
const authUrl = 'http://127.0.0.1:8000/login';

export const AUTH_REQUEST = ({commit, dispatch}, user) => {
  return new Promise((resolve, reject) => {
    axios({url: authUrl, data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.auth;
            commit('AUTH_SUCCESS', token);
            resolve(resp);
          })
        .catch(err => {
          commit('AUTH_ERROR', err)
          reject(err);
        });
  });
}
