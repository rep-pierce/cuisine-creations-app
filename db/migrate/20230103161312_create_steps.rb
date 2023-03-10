class CreateSteps < ActiveRecord::Migration[7.0]
  def change
    create_table :steps do |t|
      t.belongs_to :recipe, null: false, foreign_key: true
      t.text :direction
      t.integer :step_number

      t.timestamps
    end
  end
end
