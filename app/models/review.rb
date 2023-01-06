class Review < ApplicationRecord
  belongs_to :user
  belongs_to :recipe

  validates :rating, presence: true, inclusion: { in: ( 0..5 ) }

def review_for
    "Review for #{self.recipe.name}" 
end

end
