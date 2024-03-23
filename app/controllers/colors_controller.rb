class ColorsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index]
  def index; end

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

  def favorites; end

  private

  def color_params
    params.require(:color).permit(:name, :kana, :code)
  end

end
