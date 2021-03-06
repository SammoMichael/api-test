require 'rails_helper'

RSpec.describe Rec, :type => :model do
subject {
    described_class.new(rec_id: "12346", issuer: "Dr. Greenthumb",
        img_url: 'something.com', expiration: Date.new+99999999, patient_id: "2")
  }
  describe "Validations" do 
    it "is valid with valid attributes" do
        expect(subject).to be_valid
    end

    it "is not valid without a rec_id" do
        subject.rec_id = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without a img_url" do
        subject.img_url = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without a expiration" do
        subject.expiration = nil
        expect(subject).to_not be_valid
    end

    it "is not valid if expired" do
        subject.expiration = Time.new - 100 
        expect(subject).to_not be_valid 
    end 
  end 
end 

 