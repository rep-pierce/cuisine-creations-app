class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review, :review_for
  has_one :user
  has_one :recipe
end
