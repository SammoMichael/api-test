# == Schema Information
#
# Table name: cards
#
#  id         :bigint(8)        not null, primary key
#  card_id    :string           not null
#  state      :string           not null
#  expiration :datetime         not null
#  img_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  patient_id :integer          not null
#
class Card < ApplicationRecord 
  # validates :card_id, presence: true, uniqueness: true
  # validates :img_url, presence: true
  # validates :state, presence: true 
  # validates :expiration, presence: true 
  # validates :patient_id, presence: true
  # validate :card_not_expired
  # validate :valid_state
  
  # belongs_to :patient
  # def card_not_expired
  #   expiration && expiration > Time.new ?
  #   true : errors.add(:exp_month, "can't be in the past")
  #   # Raise error for expired card
  # end 

  # def valid_state
  #   STATES.include?(state) ?
  #   true : errors.add(:exp_month, "state must be valid")
  # end 
  
  # STATES = [ "AK - Alaska", 
  #             "AL - Alabama", 
  #             "AR - Arkansas", 
  #             "AS - American Samoa", 
  #             "AZ - Arizona", 
  #             "CA - California", 
  #             "CO - Colorado", 
  #             "CT - Connecticut", 
  #             "DC - District of Columbia", 
  #             "DE - Delaware", 
  #             "FL - Florida", 
  #             "GA - Georgia", 
  #             "GU - Guam", 
  #             "HI - Hawaii", 
  #             "IA - Iowa", 
  #             "ID - Idaho", 
  #             "IL - Illinois", 
  #             "IN - Indiana", 
  #             "KS - Kansas", 
  #             "KY - Kentucky", 
  #             "LA - Louisiana", 
  #             "MA - Massachusetts", 
  #             "MD - Maryland", 
  #             "ME - Maine", 
  #             "MI - Michigan", 
  #             "MN - Minnesota", 
  #             "MO - Missouri", 
  #             "MS - Mississippi", 
  #             "MT - Montana", 
  #             "NC - North Carolina", 
  #             "ND - North Dakota", 
  #             "NE - Nebraska", 
  #             "NH - New Hampshire", 
  #             "NJ - New Jersey", 
  #             "NM - New Mexico", 
  #             "NV - Nevada", 
  #             "NY - New York", 
  #             "OH - Ohio", 
  #             "OK - Oklahoma", 
  #             "OR - Oregon", 
  #             "PA - Pennsylvania", 
  #             "PR - Puerto Rico", 
  #             "RI - Rhode Island", 
  #             "SC - South Carolina", 
  #             "SD - South Dakota", 
  #             "TN - Tennessee", 
  #             "TX - Texas", 
  #             "UT - Utah", 
  #             "VA - Virginia", 
  #             "VI - Virgin Islands", 
  #             "VT - Vermont", 
  #             "WA - Washington", 
  #             "WI - Wisconsin", 
  #             "WV - West Virginia", 
  #             "WY - Wyoming"]
end 
