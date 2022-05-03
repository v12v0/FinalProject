class RecipesController < ApplicationController
  
  def index
    render json: Recipe.all
  end

  def show 
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe
  end

  def create
    recipe = @current_user.recipes.create!(recipe_params)
    render json: recipe, status: :created
  end
  def destroy
    recipe = Recipe.find_by(id: params[:id])
    if recipe
      recipe.destroy
      head :no_content
    else
      render json: { error: "post not found" }, status: :not_found
    end
  end

  private

  def recipe_params
    params.permit(:title, :instructions, :minutes_to_complete)
  end

end
