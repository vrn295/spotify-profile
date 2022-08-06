import axios from 'axios';
import { api_route } from '../constants';

const getUserData = (token: string) => {
  return axios.get(`${api_route}/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

async function getTopArtists(token: string) {
  
}

export {
  getUserData,
};