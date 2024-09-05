"use client";

import React, { useState, useEffect } from "react";

export default function Workspace() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState("");
  const [newAttendee, setNewAttendee] = useState({
    name: "",
    age: "",
    birthday: "",
    place: "",
    gender: "",
  });
  const [attendees, setAttendees] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState("manageEvents"); // "manageEvents", "addEvent", or "addAttendees"
  const [showStatistics, setShowStatistics] = useState(false);
  const [showAttendeesList, setShowAttendeesList] = useState(true); // Toggle between list and statistics

  // Load data from local storage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const savedAttendees = JSON.parse(localStorage.getItem("attendees")) || {};
    setEvents(savedEvents);
    setAttendees(savedAttendees);
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("attendees", JSON.stringify(attendees));
  }, [events, attendees]);

  const handleAddEvent = () => {
    if (currentEvent) {
      const newEvent = {
        name: currentEvent,
        date: new Date().toLocaleDateString(),
        id: Date.now(),
      };
      setEvents([...events, newEvent]);
      setCurrentEvent("");
      setView("manageEvents");
    }
  };

  const handleAddAttendee = () => {
    if (
      newAttendee.name &&
      newAttendee.age &&
      newAttendee.birthday &&
      newAttendee.place &&
      newAttendee.gender &&
      selectedEvent
    ) {
      setAttendees((prevAttendees) => ({
        ...prevAttendees,
        [selectedEvent.id]: [
          ...(prevAttendees[selectedEvent.id] || []),
          { ...newAttendee, eventId: selectedEvent.id },
        ],
      }));
      setNewAttendee({
        name: "",
        age: "",
        birthday: "",
        place: "",
        gender: "",
      });
      setShowStatistics(true); // Show statistics when an attendee is added
    } else {
      alert("Please fill out all fields before adding an attendee.");
    }
  };

  const handleSave = () => {
    setView("manageEvents");
    setShowStatistics(false); // Hide statistics after saving
    setShowAttendeesList(true); // Ensure attendees list is shown after saving
  };

  const getEventAttendees = (eventId) => {
    return attendees[eventId] || [];
  };

  const getStatistics = (eventId) => {
    const eventAttendees = getEventAttendees(eventId);
    const totalAttendees = eventAttendees.length;

    const genderCount = eventAttendees.reduce((acc, attendee) => {
      acc[attendee.gender] = (acc[attendee.gender] || 0) + 1;
      return acc;
    }, {});

    const ageGroups = {
      "10-15": 0,
      "15-25": 0,
      "25-30": 0,
      "40-50": 0,
    };

    eventAttendees.forEach((attendee) => {
      const age = parseInt(attendee.age, 10);
      if (age >= 10 && age <= 15) ageGroups["10-15"]++;
      else if (age >= 15 && age <= 25) ageGroups["15-25"]++;
      else if (age >= 25 && age <= 30) ageGroups["25-30"]++;
      else if (age >= 40 && age <= 50) ageGroups["40-50"]++;
    });

    const genderPercentage = Object.entries(genderCount).reduce(
      (acc, [gender, count]) => {
        acc[gender] = ((count / totalAttendees) * 100).toFixed(2);
        return acc;
      },
      {}
    );

    const ageGroupPercentage = Object.entries(ageGroups).reduce(
      (acc, [group, count]) => {
        acc[group] = ((count / totalAttendees) * 100).toFixed(2);
        return acc;
      },
      {}
    );

    return {
      total: totalAttendees,
      gender: genderPercentage,
      ageGroups: ageGroupPercentage,
    };
  };

  const eventDetails = selectedEvent
    ? events.find((event) => event.id === selectedEvent.id) || {}
    : {};
  const statistics = selectedEvent
    ? getStatistics(selectedEvent.id)
    : { total: 0, gender: {}, ageGroups: {} };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-0">
      {/* Title */}
      <div className="text-center py-6 bg-gray-800 text-white">
        <h1 className="text-5xl font-extrabold">
          WORKSPACE: BSIT Event Management
        </h1>
      </div>

      {/* View Switch */}
      {view === "manageEvents" && (
        <div className="w-full bg-white shadow-lg rounded-t-lg">
          <button
            onClick={() => setView("addEvent")}
            className="w-full p-4 text-left font-semibold text-lg text-gray-800 bg-gray-200 rounded-t-lg"
          >
            Add Event
          </button>
          <div className="p-4">
            <ul className="list-disc pl-5">
              {events.length > 0 ? (
                events.map((event) => (
                  <li key={event.id} className="p-2 border-b border-gray-200">
                    <button
                      onClick={() => {
                        setSelectedEvent(event);
                        setView("addAttendees");
                      }}
                      className="text-blue-500 underline"
                    >
                      {event.name}
                    </button>
                    <span> - {event.date}</span>
                  </li>
                ))
              ) : (
                <li>No events available.</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Add Event */}
      {view === "addEvent" && (
        <div className="w-full bg-white shadow-lg rounded-t-lg">
          <button
            onClick={() => setView("manageEvents")}
            className="w-full p-4 text-left font-semibold text-lg text-gray-800 bg-gray-200 rounded-t-lg"
          >
            Manage Events
          </button>
          <div className="p-4">
            <div className="flex mb-4">
              <input
                type="text"
                value={currentEvent}
                onChange={(e) => setCurrentEvent(e.target.value)}
                placeholder="New Event Name"
                className="flex-grow p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={handleAddEvent}
                className="ml-4 p-2 bg-blue-500 text-white rounded-md"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Attendees */}
      {view === "addAttendees" && selectedEvent && (
        <div className="w-full bg-white shadow-lg rounded-t-lg mt-6">
          <button
            onClick={() => setView("manageEvents")}
            className="w-full p-4 text-left font-semibold text-lg text-gray-800 bg-gray-200 rounded-t-lg"
          >
            Manage Events
          </button>
          <button
            onClick={() => setView("addEvent")}
            className="w-full p-4 text-left font-semibold text-lg text-gray-800 bg-gray-200 rounded-t-lg"
          >
            Add Event
          </button>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={newAttendee.name}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, name: e.target.value })
                }
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                value={newAttendee.age}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, age: e.target.value })
                }
                placeholder="Age"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                value={newAttendee.birthday}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, birthday: e.target.value })
                }
                placeholder="Birthday"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                value={newAttendee.place}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, place: e.target.value })
                }
                placeholder="Place"
                className="p-2 border border-gray-300 rounded-md"
              />
              <select
                value={newAttendee.gender}
                onChange={(e) =>
                  setNewAttendee({ ...newAttendee, gender: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button
              onClick={handleAddAttendee}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Add Attendee
            </button>
            <button
              onClick={handleSave}
              className="ml-4 p-2 bg-green-500 text-white rounded-md"
            >
              Save
            </button>
          </div>

          {/* Attendees List and Statistics */}
          <div className="p-4">
            {showAttendeesList ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Attendees</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4 border-b border-gray-200">Name</th>
                        <th className="p-4 border-b border-gray-200">Age</th>
                        <th className="p-4 border-b border-gray-200">
                          Birthday
                        </th>
                        <th className="p-4 border-b border-gray-200">Place</th>
                        <th className="p-4 border-b border-gray-200">Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getEventAttendees(selectedEvent.id).length > 0 ? (
                        getEventAttendees(selectedEvent.id).map(
                          (attendee, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-4 border-b border-gray-200">
                                {attendee.name}
                              </td>
                              <td className="p-4 border-b border-gray-200">
                                {attendee.age}
                              </td>
                              <td className="p-4 border-b border-gray-200">
                                {attendee.birthday}
                              </td>
                              <td className="p-4 border-b border-gray-200">
                                {attendee.place}
                              </td>
                              <td className="p-4 border-b border-gray-200">
                                {attendee.gender}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td colSpan="5" className="p-4 text-center">
                            No attendees available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => setShowAttendeesList(false)}
                  className="mt-4 p-2 bg-yellow-500 text-white rounded-md"
                >
                  Show Statistics
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
                <div className="mb-4">
                  <p>Total Attendees: {statistics.total}</p>
                  <h3 className="text-xl font-semibold mt-4">
                    Gender Breakdown:
                  </h3>
                  <ul className="list-disc pl-5">
                    {Object.entries(statistics.gender).map(
                      ([gender, percent]) => (
                        <li key={gender}>
                          {gender}: {percent}%
                        </li>
                      )
                    )}
                  </ul>
                  <h3 className="text-xl font-semibold mt-4">
                    Age Group Breakdown:
                  </h3>
                  <ul className="list-disc pl-5">
                    {Object.entries(statistics.ageGroups).map(
                      ([group, percent]) => (
                        <li key={group}>
                          {group}: {percent}%
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <button
                  onClick={() => setShowAttendeesList(true)}
                  className="mt-4 p-2 bg-blue-500 text-white rounded-md"
                >
                  Show Attendees
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
