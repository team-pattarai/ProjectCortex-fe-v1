import axios from 'axios';

export const endpoint = 'http://127.0.0.1:5000/api';

let token = localStorage.getItem('token') ?? 'empty';

export function axiosGet(url: string) {
  return axios.request({
    method: 'GET',
    url: `${endpoint}${url}`,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function axiosPost(url: string, data: any) {
  return axios.request({
    method: 'POST',
    url: `${endpoint}${url}`,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function axiosPatch(url: string, data: any) {
  return axios.request({
    method: 'PATCH',
    url: `${endpoint}${url}`,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function axiosDelete(url: string, data: any) {
  return axios.request({
    method: 'DELETE',
    url: `${endpoint}${url}`,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
}
