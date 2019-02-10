class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :cards, :expiration, :date, null: false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
