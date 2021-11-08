import React, { useState, useEffect } from "react";
import { addActivity, allActivities } from "../api";

const NewActivity = ({ activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDestcription] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          const activityList = await allActivities();
          for (let i = 0; i < activityList.length; i++) {
            let act = activityList[i];
            if (act["name"] === name) {
              throw new Error("Activity Already Exists");
            }
          }

          const newActivity = await addActivity(name, description);
          const newActivityList = [...activities, newActivity];
          setActivities(newActivityList);
        } catch (error) {
          alert(error);
        }
      }}
    >
      <h3>Create a New Activity!</h3>

      <fieldset className="auth-component-input">
        <label htmlFor="name">Name Your Activity! </label>
        <input
          id="name"
          type="text"
          placeholder="  Activity"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </fieldset>

      <fieldset className="auth-component-input">
        <label htmlFor="description">Tell Us About You Activity!</label>
        <input
          id="description"
          type="text"
          placeholder="  Description"
          value={description}
          onChange={(event) => {
            setDestcription(event.target.value);
          }}
        />
      </fieldset>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default NewActivity;
