import { Calendar, Users, CheckSquare } from "lucide-react";
import { format } from "date-fns";
import { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const completedTasks = project.tasks.filter((t) => t.completed).length;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">{project.name}</h3>
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">Team</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{format(project.dueDate, "MMM d, yyyy")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckSquare className="h-4 w-4 text-gray-500" />
            <span>
              {completedTasks}/{project.tasks.length} tasks
            </span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
