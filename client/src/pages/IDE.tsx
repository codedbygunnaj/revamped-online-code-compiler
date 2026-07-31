// src/pages/IDE.tsx
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { FaPlay, FaBug, FaRobot, FaCode } from "react-icons/fa"; // Importing our icons!

export default function IDE() {
  const [code, setCode] = useState<string>("// Write your C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello World!\";\n    return 0;\n}");
  const [input, setInput] = useState<string>(""); // State for Custom STDIN
  const [language, setLanguage] = useState<string>("cpp"); // State for Language selector

  const handleComingSoon = (feature: string) => {
    alert(`🚀 ${feature} feature is coming soon!`);
  };

  return (
    // We use h-screen so the IDE takes exactly the height of the window without scrolling the whole page
    <div className="h-screen bg-gray-900 text-white font-sans flex flex-col overflow-hidden">
      <Navbar />

      {/* Main Workspace Container */}
      <div className="flex-1 flex flex-col p-4 gap-4 min-h-0">
        
        {/* TOP TOOLBAR */}
        <div className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-md">
          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-gray-900 px-3 py-1.5 rounded border border-gray-600">
            <FaCode className="text-blue-400" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-white outline-none cursor-pointer text-sm font-semibold"
            >
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>

          {/* Run Button */}
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-1.5 rounded-md font-bold transition-all shadow-lg shadow-green-900/20 active:scale-95">
            <FaPlay className="text-xs" /> Run
          </button>

          {/* Debug Button */}
          <button
            onClick={() => handleComingSoon("Debugger")}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-1.5 rounded-md font-semibold transition-colors active:scale-95"
          >
            <FaBug /> Debug
          </button>

          {/* Dhvani AI Button (Pushed to the right using ml-auto) */}
          <button
            onClick={() => handleComingSoon("Dhvani AI")}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-md font-semibold transition-all ml-auto shadow-lg shadow-indigo-900/20 active:scale-95"
          >
            <FaRobot /> Ask Dhvani AI
          </button>
        </div>

        {/* MIDDLE SECTION: Editor (Left) & Input (Right) */}
        <div className="flex-1 flex gap-4 min-h-0">
          
          {/* Editor Container */}
          <div className="flex-1 border border-gray-700 rounded-lg overflow-hidden shadow-xl bg-[#1e1e1e] flex flex-col">
            <div className="bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-400 border-b border-gray-700">
              main.{language === 'python' ? 'py' : language === 'java' ? 'java' : 'cpp'}
            </div>
            <div className="flex-1">
              <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={code}
                onChange={(newValue) => setCode(newValue || "")}
                options={{ fontSize: 16, minimap: { enabled: false } }}
              />
            </div>
          </div>

          {/* Custom Input Container */}
          <div className="w-1/3 flex flex-col border border-gray-700 rounded-lg overflow-hidden shadow-xl bg-gray-800">
            <div className="bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-400 border-b border-gray-700">
              Custom Input (STDIN)
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter inputs here (e.g. 5 10)..."
              className="flex-1 bg-gray-900 text-white p-4 resize-none outline-none font-mono text-sm focus:ring-1 focus:ring-gray-700"
            />
          </div>
        </div>

        {/* BOTTOM SECTION: Output Console */}
        <div className="h-40 border border-gray-700 rounded-lg overflow-hidden shadow-xl bg-gray-800 flex flex-col shrink-0">
          <div className="bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-400 border-b border-gray-700">
            Console Output
          </div>
          <div className="flex-1 bg-black p-4 font-mono text-sm text-gray-400 overflow-y-auto">
            Output will appear here after backend execution...
          </div>
        </div>
        
      </div>
    </div>
  );
}