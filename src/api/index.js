import axios from 'axios';
import { getToken } from "../auth";

const BASE = 'http://fitnesstrac-kr.herokuapp.com/api';

//Update to allActivities
export async function allActivities(){
  try{
  const { data } = await axios.get(`${ BASE }/activities`, {
  headers: {
    'Content-Type': 'application/json',
  },
    
  });
  // console.log("ALL ACTIVITIES", data)
return data;

}catch(error){
  throw error;
}
}
