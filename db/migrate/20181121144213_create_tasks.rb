class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.boolean :complete, null: false
      t.integer :list_id, null: false
      t.timestamps
    end

    add_index :tasks, :list_id
  end
end
