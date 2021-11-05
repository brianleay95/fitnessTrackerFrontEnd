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
    return data.data;
  } catch (error) {
    console.log("error in api regsiterUser");
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
