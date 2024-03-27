require 'rails_helper'

RSpec.describe Devise::SessionsController do
  context 'ログイン' do
    it 'トップ画面が表示されること' do
      login
      visit favorites_colors
      expect(current_path).to eq(root_path)
      expect(flash[:notice]).to have_content 'ログインしました'
    end
  end
end