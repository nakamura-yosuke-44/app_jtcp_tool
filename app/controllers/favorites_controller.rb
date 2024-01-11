class FavoritesController < ApplicationController
  def create
    color = Color.find(params[:color_id])
    current_user.add_favorite(color)
    favorite = current_user.favorites.find_by(color_id: color.id)
    render json: favorite
  end

  def destroy
    color = current_user.favorites.find(params[:id]).color
    current_user.delete_favorite(color)
  end
end
