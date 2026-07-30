import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";

export default function IDE(){
    const [code, setCode] = useState<string>("// Write your C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\";\n    return 0;\n}")
    //fgci: useState<string> means that the code variable can only hold text/string.
return (
    <div className="min-h-screen bg-gray-900 text-white p-6 font-sans flex flex-col">
        <Navbar/>
      
      {/* Tailwind classes for flexbox layout and spacing */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-400">Code Editor</h2>
        <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold transition-colors">
          Run Code
        </button>
      </div>
      
      {/* Monaco Online Code Editor */}
      <div className="border border-gray-700 rounded-lg overflow-hidden h-[60vh] shadow-xl">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          theme="vs-dark"
          value={code}
          onChange={(newValue) => setCode(newValue || "")}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
          }}
        />
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-2">Console Output:</h3>
        <p className="text-gray-400 font-mono text-sm">Output will appear here after backend execution...</p>
      </div>
    </div>
  );
}