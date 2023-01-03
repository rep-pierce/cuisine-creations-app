class Ingredient < ApplicationRecord
    has_many :joinirs
    has_many :recipes, through: :joinirs

    name, presence: true, uniqueness: true
end
