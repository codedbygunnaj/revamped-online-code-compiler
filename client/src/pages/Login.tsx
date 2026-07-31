import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate(); //router hook to redirect users
  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); //stops from refreshing on submit
    console.log("Logging in with:", { username, password });
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/ide"); //redirect to IDE
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center font-sans">
      <div className="bg-black/50 border-2 border-white/30 rounded-lg w-[350px] p-8 text-white transition-all duration-300 hover:bg-black/70 hover:scale-105 shadow-2xl">    
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wider">
          LOGIN
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border-2 border-white/50 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border-2 border-white/50 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 transition-colors"
          />
          
          <button
            type="submit"
            className="w-full mt-4 bg-white/20 hover:bg-white/40 text-white font-bold py-2 px-4 rounded border-2 border-white/50 transition-all cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}