class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :recipe_time, :tags, :average_rating
  has_one :user
end
