import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  // A generic handler so we don't have to write 5 different onChange functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // React Version of your validate() logic
    if (formData.password.length < 6) {
      setError("Password is too short!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    const hasUpperCase = /[A-Z]/.test(formData.password);
    const hasNumber = /\d/.test(formData.password);
    const hasSpecialChar = /[-,.!@#$%^&*]/.test(formData.password);
    
    if (!(hasNumber && hasSpecialChar && hasUpperCase)) {
      setError("Password must contain at least one uppercase letter, one number, and one special character.");
      return;
    }

    // If validation passes, route to Login (mocking backend success)
    console.log("User registered:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center font-sans py-10">
      <div className="bg-black/50 border-2 border-white/30 rounded-lg w-full max-w-md p-8 text-white transition-all duration-300 hover:bg-black/70 hover:scale-[1.01] shadow-2xl m-4">
        
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider">
          SIGN UP
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          {/* Using a helper map to render inputs cleanly */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Username", name: "username", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" }
          ].map((field) => (
            <div key={field.name} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-1/3 font-semibold text-sm text-gray-300">
                {field.label}:
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="flex-1 p-2 border-2 border-white/30 rounded bg-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
          ))}

          {/* Conditional rendering for the error message */}
          {error && (
            <div className="text-red-500 text-xs font-bold text-center mt-2 bg-red-500/10 py-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-1/2 mx-auto mt-6 bg-white/20 hover:bg-white/40 text-white font-bold py-2 px-4 rounded border-2 border-white/50 transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        
        <div className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}