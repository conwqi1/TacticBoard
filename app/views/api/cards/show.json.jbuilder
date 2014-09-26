json.extract! @card, :id, :title, :ord, :created_at, :updated_at
json.checklists @card.checklists do |checklist|
  json.extract! checklist, :id, :title, :card_id, :created_at,:updated_at
  json.items checklist.items do |item|
    json.extract! item, :id, :title, :checklist_id, :done, :created_at,:updated_at
  end
end