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
  validates :card_id, presence: true, uniqueness: true
  validates :img_url, presence: true
  validates :state, presence: true 
  validates :expiration, presence: true 
  validates :patient_id, presence: true
  validate :card_not_expired
  validate :valid_state
  
  belongs_to :patient, optional: true
  
  def card_not_expired
    expiration && expiration > Date.new ?
    true : errors.add(:exp_date, "can't be in the past")
    # Raise error for expired card
  end 

  def valid_state
    STATES.include?(state) ?
    true : errors.add("state must be valid")
  
  end 
  
  STATES = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU',
    'HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO',
    'MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR',
    'RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY']
end 
