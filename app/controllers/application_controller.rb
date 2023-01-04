class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :rescue_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_not_found
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show, :destroy]

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end



  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def rescue_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def rescue_not_found(err)
    render json: { error: err.message }, status: :not_found
  end
  
end
