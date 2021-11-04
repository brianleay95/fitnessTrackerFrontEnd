import axios from 'axios';

const BASE = 'https://fitnesstrac-kr.herokuapp.com/'

export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(user) {
  try {
    const { data } = await axios.post(`${ BASE }/users/register`,{
      user: {
        username: username,
        password: password,
      },
    });
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}