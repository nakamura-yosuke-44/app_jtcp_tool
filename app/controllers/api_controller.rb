class ApiController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[get_colors]
  def get_colors
    colors = Color.custom_select
    favorites = user_signed_in? ? current_user.favorites : []
    login = user_signed_in?
    render json: { colors: colors, favorites: favorites, login: login}
  end

  def get_favorites
    colors = current_user.favorite_colors.order(:kana)
    favorites = current_user.favorites
    login = user_signed_in?
    render json: { colors: colors, favorites: favorites, login: login}
  end
end
