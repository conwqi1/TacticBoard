class Board < ActiveRecord::Base
  validates :title, :user, presence: true
  belongs_to :user
  #association lists are deleted when owner board is deleted 
  has_many :board_memberships, dependent: :destroy
  has_many :lists, dependent: :destroy
  has_many :members, through: :board_memberships, source: :user
end
