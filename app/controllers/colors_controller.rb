class ColorsController < ApplicationController
  def index
    @colors = Color.all.order(:kana)
  end
end
