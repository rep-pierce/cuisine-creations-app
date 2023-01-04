class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

def index
  render json: User.all
end

def show
  render json: current_user
end

def destroy
  user = User.find(params[:id])
  user.destroy
  head :no_content
end

def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user, status: :created
end

private

def user_params
  params.permit(:name, :age, :image, :username, :password, :password_confirmation)
end
end
