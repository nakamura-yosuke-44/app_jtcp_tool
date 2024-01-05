class FavoritesController < ApplicationController
  def create
    color = Color.find(params[:color_id])
    current_user.bookmark(color)
    redirect_to colors_path, success: t('.success')
  end

  def delete
    color = current_user.favorites.find(params[:id]).color
    current_user.unbookmark(color)
    redirect_to coolors_path, success: t('.success')
  end
end