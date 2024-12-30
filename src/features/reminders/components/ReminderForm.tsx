import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Repeat } from 'lucide-react';

export function ReminderForm() {
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <input
        type="text"
        placeholder="Reminder title"
        className="w-full text-lg font-medium mb-4 p-2 border-b focus:outline-none focus:border-blue-500"
      />
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 text-gray-500" />
          <input type="date" className="border rounded-lg p-2" />
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="h-5 w-5 text-gray-500" />
          <input type="time" className="border rounded-lg p-2" />
        </div>
        
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Add location"
            className="border rounded-lg p-2 flex-1"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Repeat className="h-5 w-5 text-gray-500" />
          <select
            className="border rounded-lg p-2"
            value={isRecurring ? "1" : "0"}
            onChange={(e) => setIsRecurring(e.target.value === "1")}
          >
            <option value="0">Does not repeat</option>
            <option value="1">Daily</option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>
          </select>
        </div>
      </div>
    </div>
  );
}