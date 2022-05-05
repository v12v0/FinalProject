import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import About from "./pages/About";
import NewRecipe from "./pages/NewRecipe";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import SideNav from "./components/SideNav";
import Squares from "./pages/Squares";
import square2 from "./images/square2.png"
import Header from "./components/Header";
import { NavLink } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [posts, setPosts] = useState([]);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // function handleDeletePost(deletedPost) {
  //   setPosts((post) =>
  //     posts.filter((post) => post.id !== deletedPost.id)
  //   );
  // }

  return (

    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      {/* <NavBar user={user} setUser={setUser} /> */}
      <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
          <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
            <div class="flex items-center justify-center pt-6">
              <img src={square2} alt="square" className='w-10 h-10' />
            </div>
            <SideNav user={user} setUser={setUser} />
          </div>
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header user={user} setUser={setUser} />
          
          {/* dashboard display*/}
          <Switch>
            <Route exact path="/new">
              <NewRecipe user={user} />
            </Route>
            <Route exact path="/">
              <Squares user={user} setUser={setUser} />
            </Route>
            <Route exact path="/Messages">
              <div className="flex justify-end mr-5">
                <NavLink to="/new" class=" rounded-sm flex relative px-8 py-3 overflow-hidden border border-sly-200 group focus:outline-none focus:ring" href="/download">
                  <span class="absolute inset-x-0 top-0 h-[2px] transition-all bg-sky-100 group-hover:h-full group-active:bg-blue-200"></span>
                  <span class="relative text-sm font-medium text-gray-600 dark:text-gray-200 transition-colors group-hover:text-gray-600">
                    <NavLink to="/new" className="">New announcement</NavLink>
                  </span>
                </NavLink>
              </div>
              <div className="grid gap-5 p-5 overflow-auto h-screen">
                <Messages />
              </div>
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Squares">
              <Squares />
            </Route>
          </Switch>
          {/* end of dashboard display */}

        </div>
      </div>
      {/* <Footer /> */}
    </main>


  );
}

export default App;
