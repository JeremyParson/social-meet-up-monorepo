import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HobbyEventList({ hobbyData }) {
  let [currentHobbyData, setCurrentHobbyData] = useState({});
  let [eventHobbyData, setEventHobbyData] = useState([]);

  useEffect(() => {
    handleFetch();
  }, [currentHobbyData]);

  const handleFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/hobbies/${hobbyData.hobby_name}`
    );
    const json = await response.json();
    setEventHobbyData(json["events"]);
  };
  if (hobbyData !== currentHobbyData) setCurrentHobbyData(hobbyData);

  return (
    <div className="text-white">
      <h3>Events</h3>
      {eventHobbyData.map((event, i) => (
        <Link key={i} to={`/events/${event.event_id}`}>
          {event.event_name}
        </Link>
      ))}
    </div>
  );
}
