class IngredientsController < ApplicationController
    def index
        render json: Ingredient.all 
    end

    def show
        ingredients = Ingredient.find(params[:id])
        render json: ingredients
    end

    def create 
    ingredients = Ingredient.create!(ingredients_params)
    render json: ingredients, status: :created
    end

private

    def ingredients_params
        params.permit(:name , :image)
    end
end
