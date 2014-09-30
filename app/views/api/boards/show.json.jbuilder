json.(@board, :id, :title)
  json.members @board.members do |member|
    json.(member, :id, :email)
  end
  json.lists @board.lists do |list|
    json.(list, :id, :title, :ord)
    json.cards list.cards do |card|
    json.(card, :id, :title, :description, :ord)
  end
end