class RecipeReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :recipe_time, :tags
  has_many :reviews
  has_many :steps
  has_many :ingredients
  has_one :user
end
