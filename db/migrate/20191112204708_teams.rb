class Teams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|  
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
  end
end
