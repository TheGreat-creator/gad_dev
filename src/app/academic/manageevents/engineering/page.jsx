"use client";

import { useState, useEffect } from "react";

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
    if (newAttendee.name && selectedEvent) {
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
    }
  };

  const handleSave = () => {
    setView("manageEvents");
    setShowStatistics(false); // Hide statistics after saving
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
    return {
      total: totalAttendees,
      gender: genderCount,
    };
  };

  const { total, gender } = getStatistics(selectedEvent?.id || "");

  const eventDetails =
    events.find((event) => event.id === selectedEvent?.id) || {};

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
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              onClick={handleAddAttendee}
              className="p-2 bg-green-500 text-white rounded-md"
            >
              Add Attendee
            </button>

            {/* Display Attendees List */}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Attendees List
              </h2>
              <ul className="space-y-2">
                {getEventAttendees(selectedEvent.id).map((attendee, index) => (
                  <li
                    key={index}
                    className="flex justify-between p-2 border-b border-gray-200 bg-white rounded-md"
                  >
                    <span className="flex-1">{attendee.name}</span>
                    <span className="flex-1">{attendee.age} years old</span>
                    <span className="flex-1">{attendee.birthday}</span>
                    <span className="flex-1">{attendee.place}</span>
                    <span className="flex-1">{attendee.gender}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Show Statistics */}
            {showStatistics && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Statistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">
                      Total Attendees:
                    </p>
                    <p className="text-lg text-gray-600">{total}</p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">Male:</p>
                    <p className="text-lg text-gray-600">{gender.Male || 0}</p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">Female:</p>
                    <p className="text-lg text-gray-600">
                      {gender.Female || 0}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">Other:</p>
                    <p className="text-lg text-gray-600">{gender.Other || 0}</p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">
                      Percentage Female:
                    </p>
                    <p className="text-lg text-gray-600">
                      {total
                        ? (((gender.Female || 0) / total) * 100).toFixed(2)
                        : 0}
                      %
                    </p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">
                      Percentage Male:
                    </p>
                    <p className="text-lg text-gray-600">
                      {total
                        ? (((gender.Male || 0) / total) * 100).toFixed(2)
                        : 0}
                      %
                    </p>
                  </div>
                  <div className="p-4 bg-gray-200 rounded-lg">
                    <p className="font-semibold text-gray-800">
                      Percentage Other:
                    </p>
                    <p className="text-lg text-gray-600">
                      {total
                        ? (((gender.Other || 0) / total) * 100).toFixed(2)
                        : 0}
                      %
                    </p>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={handleSave}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
