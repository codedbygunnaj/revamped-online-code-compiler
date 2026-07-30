import { useState } from "react";

type Problem = {
  id: number;
  title: string;
  answers: {
    cpp: string;
    java: string;
    python: string;
  };
};

function QuestionCard({ problem }: { problem: Problem }) {
  const [activeLang, setActiveLang] = useState<"cpp" | "java" | "python" | null>(null);

  const toggleAnswer = (lang: "cpp" | "java" | "python") => {
    setActiveLang((prev) => (prev === lang ? null : lang));
  };

  return (
    <div className="bg-black/50 border-2 border-white/30 rounded-lg p-8 m-6 transition-all duration-300 hover:bg-[#141414]/80 hover:scale-[1.02]">
      <p className="text-lg font-bold mb-4">
        {problem.id}. {problem.title}
      </p>

      {/* Language Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => toggleAnswer("cpp")}
          className={`font-bold text-sm py-2 px-4 rounded transition-all duration-200 hover:-translate-y-1 shadow-md ${
            activeLang === "cpp" ? "bg-white/40" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          C++
        </button>
        <button
          onClick={() => toggleAnswer("java")}
          className={`font-bold text-sm py-2 px-4 rounded transition-all duration-200 hover:-translate-y-1 shadow-md ${
            activeLang === "java" ? "bg-white/40" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          Java
        </button>
        <button
          onClick={() => toggleAnswer("python")}
          className={`font-bold text-sm py-2 px-4 rounded transition-all duration-200 hover:-translate-y-1 shadow-md ${
            activeLang === "python" ? "bg-white/40" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          Python
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeLang ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeLang && (
          <pre className="bg-gray-700 text-black font-mono font-bold p-4 rounded-md text-sm overflow-x-auto">
            <code>{problem.answers[activeLang]}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

export default function Problems() {
  // Your Data Array (I've added the first two, just copy-paste the rest of your strings here!)
  const problemsData: Problem[] = [
    {
      id: 1,
      title: "Find the largest element in an array of integers.",
      answers: {
        cpp: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {12, 35, 7, 42, 19};
    int n = sizeof(arr) / sizeof(arr[0]);
    int max = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    cout << "Largest element is: " << max << endl;
    return 0;
}`,
        java: `class Test 
{ 
    static int arr[] = {12, 35, 7, 42, 19}; 
    static int largest() 
    { 
        int i; 
        int max = arr[0]; 
        for (i = 1; i < arr.length; i++) 
            if (arr[i] > max) 
                max = arr[i]; 
        
        return max; 
    } 
    public static void main(String[] args) 
    { 
        System.out.println("Largest in given array is " + largest()); 
    } 
}`,
        python: `arr = [12, 35, 7, 42, 19]
max_value = max(arr)
print("Largest element is:", max_value)`
      }
    },
    {
      id: 2,
      title: "Find the minimum element in an array of integers.",
      answers: {
        cpp: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {12, 35, 7, 42, 19};
    int n = sizeof(arr) / sizeof(arr[0]);
    int min = arr[0];

    for (int i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    cout << "Smallest element is: " << min << endl;
    return 0;
}`,
        java: `class Test 
{ 
    static int arr[] = {12, 35, 7, 42, 19}; 
    static int smallest() 
    { 
        int i; 
        int min = arr[0]; 
        for (i = 1; i < arr.length; i++) 
            if (arr[i] < min) 
                min = arr[i]; 
        
        return min; 
    } 
    public static void main(String[] args) 
    { 
        System.out.println("Smallest in given array is " + smallest()); 
    } 
}`,
        python: `arr = [12, 35, 7, 42, 19]
min_value = min(arr)
print("Smallest element is:", min_value)`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="border-b-4 border-white/20 pb-4 mb-8">
          <h2 className="text-4xl text-center font-bold tracking-wider">
            PRACTICE QUESTIONS
          </h2>
        </div>

        {/* Map through your data array and render a QuestionCard for each */}
        {problemsData.map((problem) => (
          <QuestionCard key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
}