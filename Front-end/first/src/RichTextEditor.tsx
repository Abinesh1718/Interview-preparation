// RichTextEditor.tsx
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">My Notes</h2>
      
      {/* Quill Editor */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Write something..."
        className="bg-white"
      />

      {/* Preview HTML Output */}
      <div className="mt-4">
        <h3 className="font-semibold">📄 HTML Output:</h3>
        <div className="p-2 border rounded bg-gray-50">
          <pre>{value}</pre>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
