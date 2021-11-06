import React, { useState, useEffect } from 'react';
import { allActivities, createRoutine, routines, userRoutines } from '../api';

const Routines = () => {
  const [routine, setRoutines] = useState([])
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
            <li key={routine.id}>{routine.name}{routine.goal}{routine.username}{routine.activites}</li>
          ))}
        </ul>
        </div>
    );
}

export default function Routines();