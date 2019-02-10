  class Api::CardsController < ApplicationController 
    def index 
        @cards = Card.all
    end 

    def create
        @card = Card.new(card_params)
        if @card.save
            render :show 
        else 
            render json: @card.errors.full_messages, status: 422 
        end 
    end

    def show
        @card = Card.find(params[:id])
        if @card
            render :show 
        else  
            render json: ['unable to find card'], status: 404
        end 
    end

    def update
        @card = Card.find(params[:id])
        if @card
            if @card.update(card_params)
                render :show 
            else 
                render json: @cards.errors.full_messages
            end
        end 
    end
     
    def destroy
        @card = Card.find(params[:id])
        if @card 
            @card.destroy 
            render :show 
        else 
            render json: ["failed to delete"], status: 401
        end 
    end

    def card_params
        params.require(:card).permit(:card_id, :card_id, :state, :image_url, :expiration)  
    end 
end 
