# == Schema Information
#
# Table name: colors
#
#  id         :bigint           not null, primary key
#  code       :string           not null
#  kana       :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_colors_on_name_and_kana_and_code  (name,kana,code) UNIQUE
#
class Color < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :name, :kana, :code, presence: true
  validates :code, uniqueness: { scope: %i[name kana ] }

  def favorite_find(user)
    self.favorites.find_by(user_id: user.id)
  end

  scope :search, -> (keyword) do
    return if keyword.blank?
    where(['name LIKE(?) OR kana LIKE(?)', "#{keyword}%", "#{keyword}%"])
  end
end
