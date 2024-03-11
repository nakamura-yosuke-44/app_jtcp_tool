class SearchesController < ApplicationController
  skip_before_action :authenticate_user!

  def search
    colors = Color.search(params[:keyword]).order(:kana)
    render json: colors
  end
end
