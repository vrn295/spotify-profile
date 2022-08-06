import axios from 'axios';
import { api_route } from '../constants';

function getUserData(token: string) {
  return axios.get(`${api_route}/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export {
  getUserData,
};