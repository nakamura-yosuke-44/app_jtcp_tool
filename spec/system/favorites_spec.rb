require 'rails_helper'

RSpec.describe 'Favorites', type: :system do
  before do
    ActionController::Base.allow_forgery_protection = true
  end
  after do
    ActionController::Base.allow_forgery_protection = false
  end
  let!(:favorite) { create :favorite }
  let!(:user) { favorite.user }
  let!(:color_ai) { favorite.color }
  let!(:color_sakura) { create :color_sakura }
  let!(:color_sora) { create :color_sora }
  describe 'お気に入り機能' do
    context 'ログイン前'do
      it 'お気に入りアイコンが表示されない' do
        visit colors_path
        expect(page).to have_no_selector("#favorite_#{rand(400)}")
      end
    end
    
    context 'ログイン後' do
      before do
        user.confirm
        login_by_helper(user)
        visit colors_path
      end
      it 'お気に入りアイコンが表示される' do
        visit colors_path
        expect(page).to have_selector("#favorite_#{rand(3)}")
      end
      
      it 'アイコンを押すとお気に入りに追加される' do
        within('#favorite_1') do
          expect(page).to have_css("path[fill='#FFCDD2']")
          click
          expect(page).to have_css("path[fill='#F44336']")
        end
        expect(page).to have_content('お気に入りに追加しました')
        find('#menu-icon').click
        expect(page).to have_link('お気に入り')
        click_link 'お気に入り'
        expect(page).to have_content('桜色')
        within('.breadcrumbs') do
          expect(page).to have_content("#{user.name}さんのお気に入り")
        end
        expect(current_path).to eq(favorites_colors_path)
        within('#favorite_1') do
          expect(page).to have_css("path[fill='#F44336']")
        end
      end

      it 'お気に入り済みアイコンを押すとお気に入りから削除される' do
        visit favorites_colors_path
        expect(page).to have_content('藍色')
        within('#favorite_0') do
          expect(page).to have_css("path[fill='#F44336']")
          click
          expect(page).to have_css("path[fill='#FFCDD2']")
        end
        expect(page).to have_content('お気に入りから削除しました')
        visit favorites_colors_path
        expect(page).not_to have_content('藍色')
        expect(page).to have_content('お気に入りはありません')
        visit colors_path
        within('#favorite_0') do
          expect(page).to have_css("path[fill='#FFCDD2']")
        end
      end
    end
  end
end
