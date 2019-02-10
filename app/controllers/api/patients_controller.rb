class Api::PatientsController < ApplicationController 
    def index 
        @patients = Patient.all
    end 

    def create
        @patient = Patient.new(patient_params)
            if @patient.save
                render :show 
            else 
                render json: @patient.errors.full_messages, status: 422 
            end 
    end

    def show
        @patient = Patient.find(params[:id])
        if @patient
            render :show 
        else  
            render json: ['unable to find patient'], status: 404
        end 
    end

    def update
        @patient = Patient.find(params[:id])
        if @patient
            if @patient.update(patient_params)
                render :show 
            else 
                render json: @patients.errors.full_messages
            end
        end 
    end
     
    def destroy
        @patient = Patient.find(params[:id])
        if @patient 
            @patient.destroy 
            render :show 
        else 
            render json: ["failed to delete"], status: 401
        end 
    end

  def patient_params
    params.require(:patient).permit(:patient_id, :card_id, :state, :image_url, :expiration)  
  end 
end 