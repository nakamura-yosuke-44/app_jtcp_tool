class Color < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :name, :kana, :code, presence: true
  validates :code, uniqueness: { scope: %i[name kana ] }
end
