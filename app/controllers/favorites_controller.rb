class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create!(fav_params)
        recipe = {
            id: favorite.recipe.id,
            name: favorite.recipe.name,
            image: favorite.recipe.image,
            recipe_time: favorite.recipe.recipe_time,
            tags: favorite.recipe.tags,
            average_rating: favorite.recipe.average_rating,
            favorite_index: favorite.id
        }
        render json: recipe
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def fav_params
        params.permit(:user_id, :recipe_id)
    end
end
