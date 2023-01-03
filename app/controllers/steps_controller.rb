class StepsController < ApplicationController
    def create
        steps = Step.create!(steps_params)
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
        params.permit(:direction, :step_number)
    end
end
