import React, { useState, useEffect } from "react";
import { allActivities, createRoutine, routines, userRoutines } from "../api";




const Routines = () => {
  const [routine, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    routines().then((res) => {
      setRoutines(res);
    });
  }, []);

  return (
    <div>
      <h1>Routines</h1>
      <ul>
        {routine.map((routine) => (
          <li key={routine.id}>
            <h2>{routine.name}</h2>
            <h3>{routine.goal}</h3>
            {routine.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Routines;
