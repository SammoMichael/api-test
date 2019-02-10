# == Schema Information
#
# Table name: patients
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  rec_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  patient_id :integer          not null
#

class Patient < ApplicationRecord
    # validates :name, presence: true 
    # validates :patient_id, uniqueness: true, presence: true 
    
    # has_one :card
    # has_one :rec
end 
