class ColorsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]
  def index 
    #@colors = Color.all.order(:kana)
    @colors = Color.custom_select
    @favorites = user_signed_in? ? current_user.favorites : []
  end

  def new
    @color = Color.new
  end

  def create
    @color = Color.new(color_params)
    if @color.save
      redirect_to root_path, success: t('.success')
    else
      flash.now[:success] = t('.false')
      render :new, status: :unprocessable_entity
    end

  end

  def favorites
    @colors = current_user.favorite_colors.order(:kana)
    @favorites = current_user.favorites
  end

  private

  def color_params
    params.require(:color).permit(:name, :kana, :code)
  end

end
