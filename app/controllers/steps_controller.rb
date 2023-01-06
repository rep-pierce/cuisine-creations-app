class StepsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        steps = Step.create!(steps_params[:_json])
        render json: steps, status: :created
    end

    def update
        steps = Step.update!(steps_params)
        render json: steps, status: :accepted
    end

    def destroy
        steps = Step.find(params[:id])
        steps.destroy
        head :no_content
    end

private 

    def steps_params
        params.permit(_json: [:step_number, :recipe_id, :direction])
    end
end
