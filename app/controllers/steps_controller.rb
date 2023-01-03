class StepsController < ApplicationController
    def create
        steps = Steps.create!(steps_params)
        render json: steps, status: :created
    end

    def update
        steps = Steps.update!(steps_params)
        render json: steps, status: :accepted
    end

    def delete
        steps = Steps.find(params[:id])
        steps.destroy
        head :no_content
    end

private 

    def steps_params
        params.permit(:direction, :step_number)
    end
end
