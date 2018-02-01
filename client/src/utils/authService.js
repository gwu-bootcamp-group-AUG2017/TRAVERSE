import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';
var jwtDecode = require('jwt-decode');

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const UID = 'uid';
const IDP = 'identity-provider';

var auth = new auth0.WebAuth({
  domain: 'hilldev.auth0.com',
  clientID: 'g2Tg8W1DvY0J1lp42QQD5bApbU7wrMXQ',
  redirectUri: 'http://localhost:3000/callback',
  audience: 'https://hilldev.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export function login() {
    auth.authorize();
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  browserHistory.push('/');
  alert('Logged out');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function setUID() {
  let uid = jwtDecode(getParameterByName('id_token'));
  let tmp = JSON.stringify(uid.sub).split('|');
  localStorage.setItem(IDP, tmp[0].slice(1,tmp[0].length))
  localStorage.setItem(UID, tmp[1].slice(0,tmp[1].length-1));
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }
  const date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
