import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import AuthInput from "../../components/input/AuthInput";
import { validateEmail } from "../../utils/helper";
import { API_PATHS } from "../../utils/apiPath";
import axiosInstance from "../../utils/axiosinstance";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password.");
      return;
    }
    setError("");
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
      <AuthLayout >
        <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-green-400">Welcome Back</h3>
          <p className="text-xs text-black mt-[5px] mb-6">
            Sign in to continue
          </p>

          <form onSubmit={handleLogin}>
            <div className="grid grid-cols-1 gap-4">
              <AuthInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  placeholder="ex@gmail.com"
                  type="text"
                  className="bg-gray-800 text-red-200 border border-black-500 focus:ring-2 focus:ring-blue-500 rounded-md"
              />

              <AuthInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="Min 8 characters"
                  type="password"
                  className="bg-gray-100 text-gray-700 border border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div>

            {error && <p className="text-xs text-red-500 pb-2.5">{error}</p>}

           <button type="submit" className="btn-primary w-full bg-green-400 hover:bg-green-500 hover:text-white mt-6 text-white rounded-md focus:ring-2 "
>
              LOGIN
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
              Don't have an account?{" "}
              <Link className="font-medium underline text-green-400" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </AuthLayout>
  );
};

export default LoginForm;
