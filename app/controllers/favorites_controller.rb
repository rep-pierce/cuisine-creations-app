class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create!(fav_params)
        render json: favorite.recipe
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
