/*
export function someAction (context) {
}
*/
import axios from 'axios'

// for GO server should be this link + params should be Name / Password
// const authUrl = 'http://127.0.0.1:8000/login'

const authUrl = 'http://localhost:1337/auth/local'

export const AUTH_REQUEST = ({ commit, dispatch }, user) => {
  return new Promise((resolve, reject) => {
    axios({ url: authUrl, data: user, method: 'POST' })
      .then(resp => {
        console.log(resp)
        // Uncomment this line for GO server
        // const token = resp.data.auth
        const token = resp.data.jwt
        commit('AUTH_SUCCESS', token)
        resolve(resp)
      })
      .catch(err => {
        commit('AUTH_ERROR', err)
        reject(err)
      })
  })
}
