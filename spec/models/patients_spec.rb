require 'rails_helper'

RSpec.describe Patient, :type => :model do
  subject {
    described_class.new(name: "Anything", patient_id: '123456')
  }
  describe "Validations" do 
    it "is valid with valid attributes" do
        expect(subject).to be_valid
    end

    it "is not valid without a name" do
        subject.name = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without a patient_id" do
        subject.patient_id = nil
        expect(subject).to_not be_valid
    end
  end 
    
end

 