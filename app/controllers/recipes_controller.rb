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
    client = OpenAI::Client.new(access_token: ENV["OPENAI_API_KEY"])
    response = client.images.generate(parameters: { prompt: "a giant, mutant sandwich monster terrorizing a city, with terrified citizens running for their lives.", size: "256x256" })
    recipe = Recipe.create!(recipe_params)
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
