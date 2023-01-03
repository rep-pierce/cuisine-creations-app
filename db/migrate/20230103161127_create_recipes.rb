class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image
      t.integer :recipe_time
      t.string :tags

      t.timestamps
    end
  end
end
