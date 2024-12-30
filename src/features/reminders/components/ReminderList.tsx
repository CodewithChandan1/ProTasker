import { format } from "date-fns";
import { Bell, MapPin, Repeat, CheckCircle, Circle } from "lucide-react";
import { useReminders } from "../hooks/useReminders";

export function ReminderList() {
  const { reminders, toggleReminder } = useReminders();

  return (
    <div className="space-y-4">
      {reminders.map((reminder) => (
        <div
          key={reminder.id}
          className={`bg-white rounded-lg shadow-sm p-4 ${
            reminder.completed ? "opacity-50" : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleReminder(reminder.id)}
              className="flex-shrink-0"
            >
              {reminder.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </button>

            <div className="flex-1">
              <h3
                className={`font-medium ${
                  reminder.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {reminder.title}
              </h3>

              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Bell className="h-4 w-4" />
                  <span>{format(reminder.datetime, "MMM d, h:mm a")}</span>
                </div>

                {reminder.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{reminder.location}</span>
                  </div>
                )}

                {reminder.recurring && (
                  <div className="flex items-center space-x-1">
                    <Repeat className="h-4 w-4" />
                    <span>{reminder.recurring}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
