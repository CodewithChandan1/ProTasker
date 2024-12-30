import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { useTasks } from '../hooks/useTasks';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      title,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      tags,
    });

    setTitle('');
    setPriority('medium');
    setDueDate('');
    setTags([]);
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full text-lg mb-4 p-2 border-b focus:outline-none focus:border-blue-500"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="w-full p-2 border rounded-lg"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full pl-10 p-2 border rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Add tags..."
            className="flex-1 p-2 border rounded-lg"
          />
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}