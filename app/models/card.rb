class Card < ActiveRecord::Base
    validates :title, presence: true
    belongs_to :list
    #association lists are deleted when owner board is deleted 
    has_many :checklists, dependent: :destroy
end
