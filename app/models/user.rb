class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :favorite_colors, through: :favorites, source: :color
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  def add_favorite(color)
    favorite_colors << color
  end

  def delete_favorite(color)
    favorite_colors.destroy(color)
  end

  def favorite?(color)
    favorite_colors.include?(color)
  end
end
