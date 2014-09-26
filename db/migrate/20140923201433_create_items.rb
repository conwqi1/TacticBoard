class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null:false
      t.integer :checklist_id, null:false
      t.boolean :done, default: false
      t.float :ord, default: 0.0
      t.timestamps
    end
    add_index "items", ["checklist_id"], name: "index_items_on_checklist_id", using: :btree
  end
end
