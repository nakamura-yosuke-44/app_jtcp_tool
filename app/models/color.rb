class Color < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :name, :kana, :code, presence: true
  validates :code, uniqueness: { scope: %i[name kana ] }

  def favorite_find(user)
    self.favorites.find_by(user_id: user.id)
  end
end
