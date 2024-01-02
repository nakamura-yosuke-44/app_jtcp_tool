class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :color

  validates :color_id, uniqueness: {scopr: :user}
end
