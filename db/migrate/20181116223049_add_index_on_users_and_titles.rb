class AddIndexOnUsersAndTitles < ActiveRecord::Migration[5.2]
  def change
    add_index :lists, [:user_id, :title], unique: true
  end
end
