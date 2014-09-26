class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :title, null:false
      t.integer :card_id, null:false
       t.float :ord, default: 0.0
      t.timestamps
    end
    add_index "checklists", ["card_id"], name: "index_checklists_on_card_id", using: :btree
  end
end
