# == Schema Information
#
# Table name: recs
#
#  id         :bigint(8)        not null, primary key
#  rec_id     :string           not null
#  issuer     :string           not null
#  expiration :datetime         not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  patient_id :integer          not null
#

class Rec < ApplicationRecord 
    validates :rec_id, presence: true, uniqueness: true
    validates :patient_id, presence: true  
    validates :issuer, presence: true
    validates :img_url, presence: true 
    validates :expiration, presence: true
    validate :rec_not_expired

    belongs_to :patient, optional: true

    def rec_not_expired
      expiration && expiration > Time.new ?
      true : errors.add(:exp, "can't be in the past")
      # Raise error for expired recommendation
    end
end 
