class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

private

    def user_params
        params.permit(:name, :age, :image, :username, :password_digest)
    end
end
