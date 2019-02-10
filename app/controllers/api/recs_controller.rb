  class Api::RecsController < ApplicationController 
    def index 
        @recs = Rec.all
    end 

    def create
        @rec = Rec.new(rec_params)
            if @rec.save
                render :show 
            else 
                render json: @rec.errors.full_messages, status: 422 
            end 
    end

    def show
        @rec = Rec.find_by_rec_id(params[:id])
        if @rec
            render :show 
        else  
            render json: ['unable to find rec'], status: 404
        end 
    end

    def update
        byebug
        @rec = Rec.find_by_rec_id(params[:id])
        if @rec
            if @rec.update(rec_params)
                render :show 
            else 
                render json: @recs.errors.full_messages
            end
        end 
    end
     
    def destroy
        # byebug
        @rec = Rec.find_by_rec_id(params[:id])
        if @rec 
            @rec.destroy 
            render :show 
        else 
            render json: ["failed to delete"], status: 401
        end 
    end

    def rec_params
        params.require(:rec).permit(:issuer, :rec_id, :state, :image_url, :expiration)  
    end 
end 
