class CreateRecs < ActiveRecord::Migration[5.2]
  def change
    create_table :recs do |t|
      t.string :rec_id, null: false, :unique =>  true
      t.string :issuer, null: false
      t.date :expiration, null: false
      t.string :img_url, null: false
      t.string :patient_id, null: false
    
      t.timestamps
    end
    
    add_index :recs, :rec_id
  end
end
