import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image, Mic, Tag, Save } from "lucide-react";

export function NoteEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center space-x-2 mb-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Image className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Mic className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Tag className="h-5 w-5" />
        </button>
        <button className="ml-auto p-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save</span>
        </button>
      </div>
      <EditorContent editor={editor} className="prose max-w-none" />
    </div>
  );
}
