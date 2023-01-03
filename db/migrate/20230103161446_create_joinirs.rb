class CreateJoinirs < ActiveRecord::Migration[7.0]
  def change
    create_table :joinirs do |t|
      t.belongs_to :ingredient, null: false, foreign_key: true
      t.belongs_to :recipe, null: false, foreign_key: true
      t.string :amount

      t.timestamps
    end
  end
end
