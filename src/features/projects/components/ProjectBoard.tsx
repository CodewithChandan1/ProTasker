import { Users, Calendar, MessageSquare, Paperclip } from "lucide-react";

interface ProjectTask {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  comments: number;
  attachments: number;
}

interface ProjectBoardProps {
  tasks: ProjectTask[];
}

export function ProjectBoard({ tasks }: ProjectBoardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["To Do", "In Progress", "Done"].map((column) => (
          <div key={column} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium mb-4">{column}</h3>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <h4 className="font-medium mb-3">{task.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{task.assignee}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{task.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{task.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Paperclip className="h-4 w-4" />
                        <span>{task.attachments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
