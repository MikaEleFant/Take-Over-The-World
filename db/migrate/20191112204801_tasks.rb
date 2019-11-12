class Tasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :priority, null: false, default: 4
      t.date :due_date
      t.boolean :completed, null: false, default: false
      t.integer :user_id, null: false, unique: true, index: true
      t.integer :list_id, null: false, unique: true, index: true

      t.timestamps
    end
  end
end
