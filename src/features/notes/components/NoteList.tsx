import { format } from "date-fns";
import { FileText, Tag } from "lucide-react";
import { useNotes } from "../hooks/useNotes";

export function NoteList() {
  const { notes } = useNotes();

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">{note.title}</h3>
            <span className="text-sm text-gray-500">
              {format(note.updatedAt, "MMM d, yyyy")}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {note.content}
          </p>
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-gray-400" />
            <div className="flex items-center space-x-1">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
