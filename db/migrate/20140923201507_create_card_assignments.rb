class CreateCardAssignments < ActiveRecord::Migration
  def change
    create_table :card_assignments do |t|
      t.integer :card_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index "card_assignments", ["card_id", "user_id"], name: "index_card_assignments_on_card_id_and_user_id", unique: true, using: :btree
  end
end
