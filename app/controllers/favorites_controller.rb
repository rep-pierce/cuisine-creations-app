class FavoritesController < ApplicationController

    def create
        favorite = Favorite.create!(params[:user_id], params[:recipe_id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end
end
