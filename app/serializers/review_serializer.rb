class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review
  has_one :user
  has_one :recipe
end
