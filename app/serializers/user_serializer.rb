class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :image
end
