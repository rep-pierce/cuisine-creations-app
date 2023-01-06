class StepSerializer < ActiveModel::Serializer
  attributes :id, :direction, :step_number
  has_one :recipe



  
end