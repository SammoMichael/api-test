require 'rails_helper'

RSpec.describe Patient, :type => :model do
  subject {
    described_class.new(name: "Anything", rec_id: '123456')
  }
  describe "Validations" do 
    it "is valid with valid attributes" do
        expect(subject).to be_valid
    end

    it "is not valid without a name" do
        subject.name = nil
        expect(subject).to_not be_valid
    end

    it "is not valid without a rec_id" do
        subject.rec_id = nil
        expect(subject).to_not be_valid
    end
  end 
    describe "Associations" do
        it { should have_one(:card) }
      it { should have_one(:rec) }
    end
end

 