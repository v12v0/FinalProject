import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Messages({ onDeletePost, posts }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  function handleDeletePost() {
    // fetch(`/recipes/${id}`, {
    //   method: "DELETE",
    // }).then((r) => {
    //   if (r.ok) {
    //     onDeletePost(post);
    //   }
    // });
    // console.log(recipe.id)
  }

  return (
    <div className="text-black dark:text-gray-200 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container relative left-0 z-50" >
      {/* first card */}
      <div className="block overflow-hidden rounded-2xl">
        <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">title</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">username</span>
              <span> &middot; </span>
              <span onClick={handleDeletePost} className="cursor-pointer text-lime-400"> Mark as done </span>
              <span> &middot; </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">message</p>
        </div>
        <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1595023027074-2cf05c6a4c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      {/* first card */}
      {/* second card */}
      <div className="block overflow-hidden rounded-2xl">
        <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">title</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">username</span>
              <span> &middot; </span>
              <span onClick={handleDeletePost} className="cursor-pointer text-lime-400"> Mark as done </span>
              <span> &middot; </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">message</p>
        </div>
        <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      {/* second card */}
      {/* third card */}
      <div className="block overflow-hidden rounded-2xl">
        <div className="p-4 bg-gray-900 dark:bg-gray-700 ">
          <div className="flex items-center">
            <h5 className="text-sm text-white dark:text-gray-200 ">title</h5>
            <span className="text-gray-500 dark:text-gray-200 ml-1 text-xs"> &middot; </span>
            <p className="ml-1 text-xs text-gray-500 dark:text-gray-200 ">
              <span className="text-cyan-400">username</span>
              <span> &middot; </span>
              <span onClick={handleDeletePost} className="cursor-pointer text-lime-400"> Mark as done </span>
              <span> &middot; </span>
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">message</p>
        </div>
        <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
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
                    <span onClick={handleDeletePost} className="cursor-pointer text-lime-400"> Mark as done </span>
                    <span> &middot; </span>
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-300 dark:text-gray-200 ">{recipe.instructions}</p>
              </div>
              <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
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
