class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name, presence: true
      t.string :patient_id, presence: true, unique: true
      t.timestamps
    end
      add_index :patients, :patient_id, unique: true
  end
end
