class ReviewsController < ApplicationController

    
    def create
       p params
        review = Review.create!(review_params)
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:user_id, :recipe_id, :rating, :review)
    end

end
