class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :recipe_time, :tags
  has_one :user
end
