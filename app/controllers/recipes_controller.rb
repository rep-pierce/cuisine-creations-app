class RecipesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    recipes = Recipe.all.reverse
    render json: recipes
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, serializer: RecipeReviewsSerializer
  end

  def create
    recipe = Recipe.create!(recipe_params)
    client = OpenAI::Client.new
    response = client.images.generate(parameters: { prompt: recipe.name, size: "256x256" })
    if recipe.image.blank?
      recipe.image = response.dig("data", 0, "url")
      recipe.save!
    end
    render json: recipe
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def recipe_params
    params.permit(:name, :user_id, :image, :recipe_time, :tags)
  end
end
