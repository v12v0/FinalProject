import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Messages({ onDeletePost, posts }) {
  const [recipes, setRecipes] = useState([]);

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
    console.log({ recipes })
  }

  return (
    <div className="text-black dark:text-gray-200 grid sm:grid-cols-1 lg:grid-cols-4 gap-10 " >
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div className="grid gap-10 p-10">
              <div key={recipe.id}>
                <div class=" flex-cols block p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm rounded-md gap-5">
                  <h2 class="mt-3 text-lg font-bold">{recipe.title}</h2>
                  <p>Date: {recipe.minutesToComplete}</p>
                  &nbsp;·&nbsp;
                  <p class="mt-3 text-sm text-gray-500">
                    {recipe.instructions}
                  </p>
                  
                  <p class="relative inline-block mt-16 text-sm font-bold text-indigo-600">
                    <span
                      class="absolute inset-x-0 bottom-0 transition-transform transform bg-indigo-100 h-4/5 group-hover:scale-110"
                    ></span>
                    <span class="relative">{recipe.user.username}</span>
                  </p>
                  <button onClick={handleDeletePost}> Seen </button>
                </div>
                {/* <h2>{recipe.title}</h2>
            <p>
              <em>Time to Complete: {recipe.minutesToComplete} minutes</em>
              &nbsp;·&nbsp;
              <cite>By {recipe.user.username}</cite>
            </p>
            <ReactMarkdown>{recipe.instructions}</ReactMarkdown> */}
              </div>
            </div>

          )
      )
      ) : (
      <>
        <h2>No Announcements Found</h2>
      </>
      )}
    </div>
  );
}


export default Messages;
