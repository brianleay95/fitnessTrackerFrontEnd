import React, { useState, useEffect } from "react";
import {allActivities} from "../api";
import NewActivity from "./NewActivityForm"

const Activities = ({isLoggedIn}) => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      allActivities().then((res) => {
        setActivities(res);
      });
    }, []);
    return (
      <div>
          <h1>
              Activities
          </h1>
         
           {isLoggedIn ? < NewActivity activities = {activities} setActivities = {setActivities}/>: null}
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
    );
  };


export default Activities