import React, { useState, useEffect } from "react";
import { allActivities, createRoutine, routines, userRoutines } from "../api";
import NewActivity from "./NewActivitiesForm";
const Routines = () => {
  const [routine, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(async () => {
    routines().then((res) => {
      setRoutines(res);
    });

    const everyActivity = await allActivities();

  }, []);
  console.log(routine);
  return (
    <div>
      <h1>Routines</h1>
      <div>
        {routine.map((routine, indx) => {
          const { creatorName, name, goal, activities } = routine;
          return (
            <div className="routines">
              <div  key={`routine-${indx}`}>
                <h4>{creatorName}</h4>
                <h2>{name}</h2>
                <h3>{goal}</h3>
                
              </div>
              <div>
                {" "}
                <h3> Activities</h3>
                {activities.map((activity, indx) => {
                  return (
                    <div className="activity" key={`activities-${indx}`}>
                      {" "}
                      <h4>{activity.name}</h4>
                      <p>{activity.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Routines;
