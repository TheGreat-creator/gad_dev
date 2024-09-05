"use client";

import { useState } from "react";

export default function Attendees({ attendees, setAttendees, selectedEvent }) {
  const [newAttendee, setNewAttendee] = useState({
    name: "",
    age: "",
    birthday: "",
    place: "",
    gender: "",
  });

  const handleAddAttendee = () => {
    if (newAttendee.name && selectedEvent) {
      setAttendees((prevAttendees) => [
        ...prevAttendees,
        { ...newAttendee, eventId: selectedEvent.id },
      ]);
      setNewAttendee({
        name: "",
        age: "",
        birthday: "",
        place: "",
        gender: "",
      });
    }
  };

  const sortedAttendees = [...attendees].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="w-full bg-white shadow-lg rounded-t-lg mt-6">
      <button
        onClick={() => {}}
        className="w-full p-4 text-left font-semibold text-lg text-gray-800 bg-gray-200 rounded-t-lg"
      >
        Manage Attendees for {selectedEvent.name}
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
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Attendees List
          </h2>
          <ul className="space-y-2">
            {sortedAttendees
              .filter((attendee) => attendee.eventId === selectedEvent.id)
              .map((attendee, index) => (
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
      </div>
    </div>
  );
}
