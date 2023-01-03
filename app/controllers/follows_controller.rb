class FollowsController < ApplicationController

    def create
        follow = Follow.create!(params[:follower_id], params[:followed_id])
        render json: follow
    end

    def destroy
        follow = Follow.find(params[:id])
        follow.destroy
        head :no_content
    end
    
end
