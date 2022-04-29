import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import RecipeList from "./pages/RecipeList";
import NewRecipe from "./pages/NewRecipe";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
