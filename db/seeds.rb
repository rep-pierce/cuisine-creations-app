# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Favorites.destroy_all

Faker::Food.unique.clear
Faker::LoremFlickr.unique.clear

User.create(name: "Alfred", age: 26, username: "Alfred", password_digest: "123", image: Faker::LoremFlickr.image(search_terms: ["profile picture"]))
User.create(name: "Ryan", age: 25, username: "Ryan", password_digest: "456", image: "")
User.create(name: "Bryan", age: 28, username: "Bryan", password_digest: "789", image: "")

10.times { Recipe.create(name: Faker::Food.dish, user: User.all.sample, image: Faker::LoremFlickr.image(search_terms: ["food", "recipes"])) }

10.times { Favorites.create(user: User.all.sample, recipe: Recipe.all.sample) }

10.times{Ingredient.create(name: Faker::Food.ingredient, image: Faker::LoremFlickr.image(search_terms: ["food", "ingredients"]))}

10.times{Reviews.create(user: User.all.sample, recipe: Recipe.all.sample, rating: rand(1..5), review: "test" )} 

10.times{Step.create(recipe: Recipe.all.sample, text: Faker::Food.description, step_number: rand(1..10))}

10.time{Joinir.create(ingredient: Ingredient.all.sample, recipe: Recipe.all.sample, amount: Faker::Food.measurement )}

