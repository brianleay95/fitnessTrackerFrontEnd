import axios from "axios";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    //console.log(username + ' '+ password);
    //console.log(`${ BASE }/users/register`);
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });
    //console.log(data);
    return data;
  } catch (error) {
    console.log("error in api regsiterUser");
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMe() {
  try {
    const token = getToken()
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function routines() {
  try {
    const token = getToken()
    const { data } = await axios.get(`${BASE}/users/:username/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
