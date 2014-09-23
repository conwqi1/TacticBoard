class CreateBoardMemberships < ActiveRecord::Migration
  def change
    create_table :board_memberships do |t|
      t.integer :user_id, null:false
      t.integer :board_id, null:false
      t.timestamps
    end
    add_index "board_memberships", ["user_id", "board_id"], name: "index_board_memberships_on_user_id_and_board_id", unique: true, using: :btree
  end
end
