json.(@board, :id, :title)
  json.memberships @board.board_memberships do |membership|
    json.(membership, :user_id, :board_id, :id)
  end
  json.lists @board.lists do |list|
    json.(list, :id, :title, :ord)
    json.cards list.cards do |card|
    json.(card, :id, :title, :description, :ord)
  end
end