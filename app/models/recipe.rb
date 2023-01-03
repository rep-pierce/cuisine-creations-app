class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :favorited_users, through: :favorites, source: :users
  has_many :reviews
  has_many :reviewed_users, through: :reviews, source: :users
  has_many :steps
  has_many :joinirs
  has_many :ingredients, through: :joinirs

  name, presence: true
  tags, inclusion: { in: [ "asian", "american", "italian", "vegan", "vegetarian", "mediterranean", "quick/easy", "indian", "mexican", "dessert" ] }

end
