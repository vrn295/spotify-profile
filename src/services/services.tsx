import axios from 'axios';
import { api_route } from '../constants';

export const getUserData = (token: string) => {
  return axios.get(`${api_route}/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getTopArtists = (token: string, timeRange: string = 'medium_term', limit: number = 15, offset: number = 0) => {
  return axios.get(`${api_route}/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getTopSongs = (token: string, timeRange: string = 'medium_term', limit: number = 15, offset: number = 0) => {
  return axios.get(`${api_route}/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}