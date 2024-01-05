class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :favorite_colors, through: :favorites, source: :color
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  def bookmark(board)
    favorite_colors << board
  end

  def unbookmark(board)
    favorite_colors.destroy(board)
  end

  def bookmark?(board)
    favorite_colors.include?(board)
  end
end
