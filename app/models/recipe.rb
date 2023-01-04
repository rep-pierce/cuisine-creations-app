class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy
  has_many :favorited_users, through: :favorites, source: :user
  has_many :reviews, dependent: :destroy
  has_many :reviewed_users, through: :reviews, source: :user
  has_many :steps, dependent: :destroy
  has_many :joinirs, dependent: :destroy
  has_many :ingredients, through: :joinirs

  validates :name, presence: true
  validates :tags, inclusion: { in: [ "asian", "american", "italian", "vegan", "vegetarian", "mediterranean", "quick/easy", "indian", "mexican", "dessert" ] }

end
