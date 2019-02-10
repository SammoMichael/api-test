class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :card_id, null: false 
      t.string :state, null: false 
      t.datetime :expiration, null: false
      t.string :img_url, null: false 
      t.string :patient_id, null: false 
      t.timestamps
    end
    add_index :cards, :card_id
  end
end
