class User < ApplicationRecord
has_secure_password
has_many :recipes, dependent: :destroy 
has_many :favorites, dependent: :destroy 
has_many :favorite_recipes, through: :favorites, source: :recipes
has_many :reviews, dependent: :destroy 
has_many :reviewed_recipes, through: :reviews, source: :recipes

validates :name, presence: true
validates :age, presence: true
validates :username, presence: true, uniqueness: true

end
