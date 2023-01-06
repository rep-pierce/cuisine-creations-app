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
Favorite.destroy_all
Review.destroy_all
Step.destroy_all
Joinir.destroy_all


Faker::Food.unique.clear
Faker::LoremFlickr.unique.clear

User.create(name: "Alfred", age: 26, username: "Alfred", password: "123", image: Faker::LoremFlickr.image(search_terms: ["profile picture"]))
User.create(name: "Ryan", age: 25, username: "Ryan", password: "456", image: Faker::LoremFlickr.image(search_terms: ["profile picture"]))
User.create(name: "Bryan", age: 28, username: "Bryan", password: "789", image: Faker::LoremFlickr.image(search_terms: ["profile picture"]))

10.times { Recipe.create(name: Faker::Food.dish, user: User.all.sample, image: Faker::LoremFlickr.image(search_terms: ["food", "recipes"]), recipe_time: rand(0..20), tags: 'american') }

10.times { Favorite.create(user: User.all.sample, recipe: Recipe.all.sample) }

10.times { Ingredient.create(name: Faker::Food.ingredient, image: Faker::LoremFlickr.image(search_terms: ["food", "ingredients"]))}

50.times { Review.create(user: User.all.sample, recipe: Recipe.all.sample, rating: rand(1..5), review: "test" )} 

50.times { Step.create(recipe: Recipe.all.sample, direction: Faker::Food.description, step_number: rand(1..10))}

10.times { Joinir.create(ingredient: Ingredient.all.sample, recipe: Recipe.all.sample, amount: Faker::Food.measurement )}

