class List < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :board
  #association lists are deleted when owner board is deleted 
  has_many :cards, dependent: :destroy
end
