class Color < ApplicationRecord
  validates :name, :kana, :code, presence: true
  validates :code, uniqueness: { scope: %i[name kana ] }
end
