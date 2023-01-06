class UserAllSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :image
  has_many :favorite_recipes
  has_many :reviews
  has_many :recipes
end
