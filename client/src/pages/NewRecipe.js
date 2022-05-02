import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Error, div, Input, Label, Textarea } from "../styles";

function NewRecipe({ user }) {
  const [title, setTitle] = useState("");
  const [minutesToComplete, setMinutesToComplete] = useState("");
  const [instructions, setInstructions] = useState(``);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
        minutes_to_complete: minutesToComplete,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/Messages");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="text-gray-500 dark:text-white w-auto">
      <div>
        <h2>Create Announcement</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="minutesToComplete">Date</Label>
            <Input
              type="date"
              id="minutesToComplete"
              value={minutesToComplete}
              onChange={(e) => setMinutesToComplete(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="Announcement">Announcement</Label>
            <Textarea
              id="Announcement"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
          <div>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Announcement"}
            </Button>
          </div>
          <div>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </div>
        </form>


      </div>

      <div>
        <h1>{title}</h1>
        <p>
          <cite>By {user.username}</cite>
          <br />
          <em>Date: {minutesToComplete}</em>
          &nbsp;·&nbsp;
          <br />
          <cite>Announcement: {instructions}</cite>
        </p>

        <div href="" class="block p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm  w-15">
          <h2 class="mt-3 text-lg font-bold">{title}</h2>
          <em>Date: {minutesToComplete}</em>
          <p class="mt-3 text-sm text-gray-500">
            {instructions}
          </p>
          <p class="relative inline-block mt-16 text-sm font-bold text-indigo-600">
            <span class="relative">By {user.username}</span>
          </p>
        </div>
      </div>



    </div>
  );
}
export default NewRecipe;
