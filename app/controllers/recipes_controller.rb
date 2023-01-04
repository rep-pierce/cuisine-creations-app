class RecipesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find(params[:id])
        render json: recipe
    end

    def create
        recipe = Recipe.create!(recipe_params)
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