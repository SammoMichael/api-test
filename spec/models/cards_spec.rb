require 'rails_helper'

RSpec.describe Card, :type => :model do
  subject {
    described_class.new(state: "NY", card_id: "123456",
        img_url: 'something.com', expiration: Time.new+100, patient_id: 123456)
  }
  describe "Validations" do 
    it "is valid with valid attributes" do
        expect(subject).to be_valid
    end

    it "is not valid without a card_id" do
        subject.card_id = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without an img_url" do
        subject.img_url = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without an expiration" do
        subject.expiration = nil
        expect(subject).to_not be_valid
    end

    it "is not valid if expired" do
        subject.expiration = Time.new - 100 
        expect(subject).to_not be_valid 
    end 
end 
    describe "Associations" do
        it { should belong_to(:patient) }
    end
end

 