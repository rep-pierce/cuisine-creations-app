class UserAllSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :image, :favorite_recipes
  has_many :reviews
  has_many :recipes
  
  def favorite_recipes
    object.favorite_recipes.map do |recipe|
    {
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      recipe_time: recipe.recipe_time,
      tags: recipe.tags,
      average_rating: recipe.average_rating,
      favorite_index: object.favorites.find_by(recipe_id: recipe.id).id
    }
    end
  end
end
