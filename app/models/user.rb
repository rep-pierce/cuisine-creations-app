class User < ApplicationRecord
has_many :recipes
has_many :favorites
has_many :favorite_recipes, through: :favorites, source: :recipes
has_many :reviews
has_many :reviewed_recipes, through: :reviews, source: :recipes

name, presence: true
age, presence: true
username, presence: true, uniqueness: true


end
