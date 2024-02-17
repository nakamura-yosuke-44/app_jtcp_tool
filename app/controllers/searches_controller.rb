class SearchesController < ApplicationController
  def search
    colors = Color.search(params[:keyword]).order(:kana)
    render json: colors
  end
end
