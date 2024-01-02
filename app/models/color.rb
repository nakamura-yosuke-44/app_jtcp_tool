class Color < ApplicationRecord
  has_many :favorites, dependent: :destroy

  validates :name, :kana, :code, presence: true
  validates :code, uniqueness: { scope: %i[name kana ] }
end
