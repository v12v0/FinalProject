import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Square2 from "../images/square2.png"


function Login({ onLogin }) {


  return (
    <div>

      <header class="shadow-sm bg-slate-50">
        <div
          class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
        >
          <div class="flex flex-1 w-0 lg:hidden">
            <button class="p-2 text-gray-600 bg-slate-50 rounded-full" type="button">
            </button>
          </div>

          <div class="flex items-center space-x-4">
            <img src={Square2} alt="square logo" class="w-10 h-10"/>
            <h1 class="text-xl w-25 h-10 text-center flex justify-center items-center"> My Squares</h1>
          </div>

          <div class="flex justify-center items-center flex-1 w-0 lg:hidden">
            <button class="p-2 text-gray-500 bg-slate-50 rounded-full" type="button">
            </button>
          </div>
        </div>

        
      </header>
      <LoginForm onLogin={onLogin} />
      <Footer />
    </div>
  );
}


export default Login;
