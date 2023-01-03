class JoinirsController < ApplicationController
    
    def create
        joinir = Joinir.create!(joinir_params)
        render json: joinir
    end

    def destroy
        joinir = Joinir.find(params[:id])
        joinir.destroy
        head :no_content
    end

    private

    def joinir_params
        params.permit(:ingredient_id, :recipe_id, :amount)
    end
end
