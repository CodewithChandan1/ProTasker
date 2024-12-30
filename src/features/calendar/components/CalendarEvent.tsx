import { format } from "date-fns";
import { Clock, MapPin } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
}

interface CalendarEventProps {
  event: CalendarEvent;
}

export function CalendarEvent({ event }: CalendarEventProps) {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <h3 className="font-medium mb-2">{event.title}</h3>
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>
            {format(event.start, "MMM d, h:mm a")} -{" "}
            {format(event.end, "h:mm a")}
          </span>
        </div>
        {event.location && (
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
