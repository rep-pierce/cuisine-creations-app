class UserAllSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :password_digest, :image
  has_many :favorite_recipes
  has_many :reviews
  has_many :recipes
end
