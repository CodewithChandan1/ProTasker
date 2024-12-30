import { useGoogleLogin } from "@react-oauth/google";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import { useCalendar } from "../hooks/useCalendar";
import { CalendarEvent } from "./CalendarEvent";

export function Calendar() {
  const { events, isAuthenticated } = useCalendar();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // Handle successful login
      console.log("Login Success:", response);
    },
    scope:
      "https://www.googleapis.com/calendar/v3/calendars/ck425789@gmail.com",
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Calendar</h2>
        {!isAuthenticated ? (
          <button
            onClick={() => login()}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            <CalendarIcon className="h-4 w-4" />
            <span>Connect Google Calendar</span>
          </button>
        ) : (
          <button
            onClick={() => {}} // Open add event modal
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <CalendarEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
