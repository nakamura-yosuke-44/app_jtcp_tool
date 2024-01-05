class ColorsController < ApplicationController
  def index
    @colors = Color.includes(:favorites).order(:kana)
  end

  def favorites
    @favorite_colors = current_user.favorite_colors
  end
end
