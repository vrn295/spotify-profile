import axios from 'axios';
import Router from 'next/router';
import { api_route, ELocalStorage } from '../constants';
import { ERoutes } from '../constants/Routes';
import { TimeRange } from '../model';

export const getUserData = (token: string) => {
  return axios.get(`${api_route}/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getTopArtists = (token: string, timeRange: TimeRange = TimeRange.SIX_MONTH, limit: number = 15, offset: number = 0) => {
  return axios.get(`${api_route}/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getTopSongs = (token: string, timeRange: TimeRange = TimeRange.SIX_MONTH, limit: number = 15, offset: number = 0) => {
  return axios.get(`${api_route}/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getUserPlaylists = (token: string, userID: string) => {
  return axios.get(`${api_route}/users/${userID}/playlists`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const getCurrectUserPlaylists = (token: string) => {
  return axios.get(`${api_route}/me/playlists`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}

export const handleLogOut = () => {
  localStorage.removeItem(ELocalStorage.Token)
  Router.push(ERoutes.HOMEPAGE)
}