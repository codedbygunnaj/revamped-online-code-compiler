import Navbar from "../components/Navbar";

type TutorialLink = {
  title: string;
  url: string;
};

type TutorialSection = {
  id: string;
  language: string;
  links: TutorialLink[];
};

export default function Tutorial() {
  // We store your tutorial data in an array of objects[cite: 5]
  const tutorialData: TutorialSection[] = [
    {
      id: "Cplusplus",
      language: "C++",
      links: [
        { title: "Introduction to C++", url: "https://www.w3schools.com/cpp/cpp_intro.asp" },
        { title: "C++ Arrays", url: "https://www.w3schools.com/cpp/cpp_arrays.asp" },
        { title: "C++ Structures", url: "https://www.w3schools.com/cpp/cpp_structs.asp" },
        { title: "C++ Pointers", url: "https://www.w3schools.com/cpp/cpp_pointers.asp" },
        { title: "C++ Recursion", url: "https://www.w3schools.com/cpp/cpp_functions_recursion.asp" },
        { title: "C++ Functions", url: "https://www.w3schools.com/cpp/cpp_functions.asp" },
        { title: "C++ Classes and Objects", url: "https://www.w3schools.com/cpp/cpp_classes.asp" },
        { title: "C++ Encapsulation", url: "https://www.w3schools.com/cpp/cpp_encapsulation.asp" },
        { title: "C++ Inheritance", url: "https://www.w3schools.com/cpp/cpp_inheritance.asp" },
        { title: "C++ Polymorphism", url: "https://www.w3schools.com/cpp/cpp_polymorphism.asp" },
        { title: "C++ Encapsulation", url: "https://www.w3schools.com/cpp/cpp_encapsulation.asp" },
        { title: "C++ STL", url: "https://www.w3schools.com/cpp/cpp_vectors.asp" },
        { title: "C++ Example", url: "https://www.w3schools.com/cpp/cpp_examples.asp" },
      ]
    },
    {
      id: "Python",
      language: "PYTHON",
      links: [
        { title: "Python", url: "https://www.w3schools.com/python/python_intro.asp" },
        { title: "Python Arrays", url: "https://www.w3schools.com/python/python_arrays.asp" },
        { title: "Python Strings", url: "https://www.w3schools.com/python/python_strings.asp" },
        { title: "Python Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" },
        { title: "Python Dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" },
        { title: "Python Classes and Objects", url: "https://www.w3schools.com/python/python_classes.asp" },
        { title: "Python Inheritance", url: "https://www.w3schools.com/python/python_inheritance.asp" },
        { title: "Python Polymorphism", url: "https://www.w3schools.com/python/python_polymorphism.asp" },
        { title: "File Handling in Python", url: "https://www.w3schools.com/python/python_file_handling.asp" },
        { title: "MySQL in Python", url: "https://www.w3schools.com/python/python_mysql_getstarted.asp" },
        { title: "Examples of Python", url: "https://www.w3schools.com/python/python_examples.asp" },
      ]
    },
    {
      id: "Java",
      language: "JAVA",
      links: [
        { title: "Java", url: "https://www.w3schools.com/java/java_intro.asp" },
        { title: "Java Arrays", url: "https://www.w3schools.com/java/java_arrays.asp" },
        { title: "Java Strings", url: "https://www.w3schools.com/java/java_strings.asp" },
        { title: "Java Methods", url: "https://www.w3schools.com/java/java_methods.asp" },
        { title: "Java Classes and Objects", url: "https://www.w3schools.com/java/java_classes.asp" },
        { title: "Java Encapsulation", url: "https://www.w3schools.com/java/java_encapsulation.asp" },
        { title: "Java Inheritance", url: "https://www.w3schools.com/java/java_inheritance.asp" },
        { title: "Java Polymorphism", url: "https://www.w3schools.com/java/java_polymorphism.asp" },
        { title: "File Handling in Java", url: "https://www.w3schools.com/java/java_files.asp" },
        { title: "Examples of Java", url: "https://www.w3schools.com/java/java_examples.asp" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <Navbar/>
        {/* Header Section */}
        <div className="text-center mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold tracking-widest mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            TUTORIALS
          </h1>
          
          {/* Quick Jump Links */}
          <div className="flex justify-center gap-4 sm:gap-8 flex-wrap">
            {tutorialData.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-sm font-bold bg-gray-800/50 border border-gray-700 rounded-full py-2 px-6 transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-500 hover:text-blue-400"
              >
                {section.language}
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16 pb-20">
          {tutorialData.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-200 border-l-4 border-blue-500 pl-4">
                {section.language}
              </h2>
              
              {/* Changed from Flexbox to CSS Grid for a much cleaner layout! */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-gray-800/30 border border-gray-700/50 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
                    >
                      <span className="font-semibold text-gray-300 group-hover:text-blue-300 transition-colors">
                        {link.title}
                      </span>
                      {/* A little arrow icon that moves on hover! */}
                      <span className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}