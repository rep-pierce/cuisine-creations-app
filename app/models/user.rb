class User < ApplicationRecord
has_secure_password
has_many :recipes, dependent: :destroy 
has_many :favorites, dependent: :destroy 
has_many :favorite_recipes, through: :favorites, source: :recipe
has_many :reviews, dependent: :destroy 
has_many :reviewed_recipes, through: :reviews, source: :recipe

validates :name, presence: true
validates :age, presence: true, numericality: true
validates :username, presence: true, uniqueness: true
# validates :password, format: { with: /\A(?=.*[a-zA-Z])(?=.*[^a-zA-Z]).+\z/, message: "must contain at least one special character" }

end
