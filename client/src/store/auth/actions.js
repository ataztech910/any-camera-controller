/*
export function someAction (context) {
}
*/
import axios from 'axios';

export const AUTH_REQUEST = ({commit, dispatch}, user) => {
  return new Promise((resolve, reject) => {
    axios({url: 'http://213.189.216.109:1337/auth/local', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.jwt;
            commit('AUTH_SUCCESS', token);
            resolve(resp);
          })
        .catch(err => {
          commit('AUTH_ERROR', err)
          reject(err);
        });
  });
}
