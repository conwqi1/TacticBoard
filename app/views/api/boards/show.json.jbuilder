json.(@board, :id, :title)
json.lists @board.lists do |list|
  json.(list, :id, :title, :ord)
  json.cards list.cards do |card|
    json.(card, :id, :title, :description, :ord)
  end
end




