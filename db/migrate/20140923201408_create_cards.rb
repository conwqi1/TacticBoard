class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.integer :list_id, null:false
      t.text :description
      t.float :ord, default: 0.0
      t.timestamps
    end
    add_index "cards", ["list_id"], name: "index_cards_on_list_id", using: :btree
  end
end
