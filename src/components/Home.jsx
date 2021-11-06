import React, { useState, useEffect } from "react";
import { allActivities } from "../api";

const Home = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    allActivities().then((res) => {
      setActivities(res);
    });
  }, []);
  return (
    <div>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
