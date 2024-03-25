require 'rails_helper'

RSpec.describe 'Search', type: :system, js: true do
  let!(:user) { create :user }
  let!(:color_ai) { create :color_ai }
  let!(:color_sakura) { create :color_sakura }
  let!(:color_sora) { create :color_sora }
  before do
    ActionController::Base.allow_forgery_protection = true
    visit colors_path
  end
  after do
    ActionController::Base.allow_forgery_protection = false
  end
  describe '検索機能' do
    context 'フォームに、登録されている色の読み仮名に含まれるかな文字を入力' do
      it '入力された文字をかな名に含む色をajaxで検索し表示' do
        fill_in 'search_form', with: 'あ'
        expect(page).to have_content('藍色')
        expect(page).not_to have_content('桜色')
        expect(page).not_to have_content('空色')
      end
    end 

    context 'フォームに、登録されている色の名前に含まれる漢字を入力' do
      it '入力された文字を色名に含む色をajaxで検索し表示' do
        fill_in 'search_form', with: '桜'
        expect(page).to have_content('桜色')
        expect(page).not_to have_content('藍色')
        expect(page).not_to have_content('空色')
      end
    end

    context 'フォームに、登録されている色の読み仮名に含まれない文字列を入力' do
      it '色は表示されない' do
        fill_in 'search_form', with: 'あああ'
        expect(page).not_to have_content('藍色')
        expect(page).not_to have_content('桜色')
        expect(page).not_to have_content('空色')
      end
    end 
  end

  describe 'オートコンプリート' do
    context 'フォームに、登録されている色の読み仮名に含まれるかな文字を入力' do
      it 'オートコンプリートで入力された文字をかな名に含む色名が表示され、選択するとフォームに入力し検索される' do
        fill_in 'search_form', with: 'あ'
        within('#autocomplete') do
          expect(page).to have_content('藍色')
          page.save_screenshot
          expect(page).not_to have_content('桜色')
          expect(page).not_to have_content('空色')
          find('li', text: '藍色').click
        end
        expect(find('#search_form').value).to eq('藍色')
        within('#color_field') do
          expect(page).to have_content('藍色')
          expect(page).not_to have_content('桜色')
          expect(page).not_to have_content('空色')
        end
      end
    end

    context 'フォームに、登録されている色の名前に含まれる漢字を入力' do
      it 'オートコンプリートで入力された文字をかな名に含む色名が表示され、選択するとフォームに入力し検索される' do
        fill_in 'search_form', with: '藍'
        within('#autocomplete') do
          expect(page).to have_content('藍色')
          expect(page).not_to have_content('桜色')
          expect(page).not_to have_content('空色')
          find('li', text: '藍色').click
        end
        expect(find('#search_form').value).to eq('藍色')
        within('#color_field') do
          expect(page).to have_content('藍色')
          expect(page).not_to have_content('桜色')
          expect(page).not_to have_content('空色')
        end
      end
    end

    context 'フォームに、登録されている色の読み仮名に含まれない文字列を入力' do
      it 'オートコンプリートが表示されない' do
        fill_in 'search_form', with: 'あああ'
        expect(page).not_to have_selector('#autocomplete')
      end
    end
  end
end