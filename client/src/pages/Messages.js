import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { NavLink } from "react-router-dom";

function Messages({ onDeletePost, posts }) {
  const [recipes, setRecipes] = useState([]);
  const [hidden, setHidden] = useState("true")

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  function handleClick() {
    setHidden((hidden) => !hidden)
    console.log(hidden)
    console.log(card1)
}

const card1 = document.querySelector("#card1")
// + (hidden ? "hidden" : "")

  return (
    <div className="text-black dark:text-gray-200 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container relative left-0 z-50" >

      {/* first card */}
      <div className={ "block overflow-hidden rounded-2xl " } id="card1">
        <div className="p-4 bg-gray-900 dark:bg-gray-700">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">Office Space</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">Tin Huynh</span>
              <span> &middot; </span>
              <span className="text-pink-400">May 1, 2022</span>
              <span> &middot; </span>
              <span onClick={handleClick} className="cursor-pointer text-lime-400"> Mark as seen </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">When we all get the chance can we discuss the furniture of the office and see what needs to be improved?</p>
        </div>
        <img className="object-cover w-full h-56 rounded-b-2xl" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
      {/* first card */}

      {/* second card */}
      <div className="block overflow-hidden rounded-2xl">
        <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">Document Review</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">Jessica Nguyen</span>
              <span> &middot; </span>
              <span className="text-pink-400">May 3, 2022</span>
              <span> &middot; </span>
              <span onClick={handleClick} className="cursor-pointer text-lime-400"> Mark as seen  </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">Someone please email me when they get the chance to review over the attached documents</p>
        </div>
        <img className="object-cover w-full h-56 rounded-b-2xl" src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      {/* second card */}

      {/* third card */}
      <div className="block overflow-hidden rounded-2xl">
        <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">*Very* Important news</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">Myron Bañez</span>
              <span> &middot; </span>
              <span className="text-pink-400">May 4, 2022</span>
              <span> &middot; </span>
              <span className="cursor-pointer text-lime-400"> Mark as seen </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">Im going to need everyone to take a look at how cute this cat is!</p>
        </div>
        <img className="object-cover w-full h-60 rounded-b-2xl" src="https://images.unsplash.com/photo-1597237154674-1a0d2274cef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
      </div>
      {/* third card */}

      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div className="">
            <div className="block overflow-hidden rounded-2xl" key={recipe.id}>
              <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
                <div className="flex items-center">
                  <h5 className="text-sm text-white dark:text-gray-200 ">{recipe.title}</h5>
                  <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
                  <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
                    <span className="text-cyan-400">{recipe.user.username}</span>
                    <span> &middot; </span>
                    <span className="text-pink-400">May 13, 2022</span>
                    <span> &middot; </span>
                    <span onClick={handleClick} className="cursor-pointer text-lime-400"> Mark as seen  </span>
                    
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">{recipe.instructions}</p>
              </div>
              <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
          </div>
        ))
      ) : (
        <>
          <h2>No Announcements Found</h2>
        </>
      )}
    </div>
  );
}


export default Messages;
