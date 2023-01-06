class RecipeReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :recipe_time, :tags, :ingredients_with_amount
  has_many :reviews
  has_many :steps
  has_one :user

  def ingredients_with_amount
    object.ingredients.map do |ingredient|
      {
        id: ingredient.id,
        name: ingredient.name,
        image: ingredient.image,
        amount: object.joinirs.find_by(ingredient_id: ingredient.id).amount
      }
    end
  end
end
