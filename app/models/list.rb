class List < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :board

  has_many :cards, dependent: :destroy
end
