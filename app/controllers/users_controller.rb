class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

  def index
    render json: User.all
  end

  #! :authorize and @current_user are in application control
  def auth
    render json: @current_user
  end

  def show
    user = User.find(params[:id])
    render json: user
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
    params.permit(:name, :age, :image, :username, :password)
  end
end
