import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      {showLogin ? (

        <section class="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-100">
          <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="max-w-lg mx-auto text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

              <p class="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                eaque error neque ipsa culpa autem, at itaque nostrum!
              </p>
            </div>

            <form onSubmit={handleSubmit} class="max-w-md mx-auto mt-8 mb-0 space-y-4">
              <div>
                <label for="username" class="sr-only">Username</label>

                <div class="relative">
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                    placeholder="Enter Username"
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>
                <div class="relative">
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter password"
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500" onClick={() => setShowLogin(false)}>
                  No account?  &nbsp;
                  <span class="underline cursor-pointer" >Sign up</span>
                </p>
                <button type="submit" class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>

          <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </div>
        </section>
      )
        :
        (
            <SignUpForm onLogin={onLogin}  onClick={() => setShowLogin(true)}/> 
        )}
    </div>
  );
}

export default LoginForm;
