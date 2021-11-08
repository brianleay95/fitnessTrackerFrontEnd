import axios from "axios";
import { getToken } from "../auth";

const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function allActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addActivity(name, description) {
  const token = getToken();
  try {
    const { data } = await axios.post(`${BASE}/activities`,{
        name: name,
        description: description,
      }, 
     { headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
     }});

     return data;
  } catch (error) {
    throw error(error);
  }
}

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
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });
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
    const token = getToken();
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function userRoutines() {
  try {
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

export async function routines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutine(routine) {
  try {
    const { data } = await axios.post(`${BASE}/routines`, {
      name: routine.name,
      goal: routine.goal,
      isPublic: routine.isPublic,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateRoutine(routine) {
  try {
    const { data } = await axios.patch(
      `${BASE}/routines/${routine.id}`,{
        
          name: routine.name,
          goal: routine.goal,
          isPublic: routine.isPublic,
        });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine(routine) {
  try {
    const token = getToken();
    const { data } = await axios.delete(`${BASE}/routines/${routine.id}`,  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function attachRoutineToActivity(routineId, activityId, count, duration) {
  try {
    const { data } = await axios.post(`${BASE}/routines/${routineId}/activities`, {
      activityId: activityId,
      count: count,
      duration: duration,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateCountorDuration(routine_activities_id) {
  try {
    const { data } = await axios.patch(
      `${BASE}/routine_activities/${routine_activities_id}`,
      {
        count: count,
        duration: duration,
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteActivityFromRoutine(routine_activities_id) {
  try {
    const { data } = await axios.delete(
      `${BASE}/routine_activities/${routine_activities_id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}
