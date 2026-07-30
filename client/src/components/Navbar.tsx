import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex justify-between items-center text-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                RevampedIDE
            </span>
            <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full text-blue-100 font-medium">
                v1.0
            </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-300">
            <Link to='/ide' className="hover:text-white transition-colors">IDE</Link>
            <Link to='/problems' className="hover:text-white transition-colors">Problems</Link>
            <Link to='/sub' className="hover:text-white transition-colors">Submissions</Link>
            </div>

            {/* User profile / Actions */}
            <div className="flex items-center space-x-4">
            <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1.5 rounded-md text-sm transition-colors">
                <Link to = '/' >Sign In</Link>
            </button>
            </div>
        </nav>
    );
}