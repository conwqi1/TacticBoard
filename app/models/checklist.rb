class Checklist < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :card
  has_many :items, dependent: :destroy 
end
