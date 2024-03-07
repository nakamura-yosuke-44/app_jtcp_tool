require 'rails_helper'

RSpec.describe 'UserSessions', type: :system, js: true do
  before do
    ActionController::Base.allow_forgery_protection = true
  end
  after do
    ActionController::Base.allow_forgery_protection = false
  end
  let!(:user) { create :user }
  describe 'ログイン' do
    context 'フォームの入力値が正常' do
      it 'ログイン処理が成功' do      
        login_by_fill(user)
        expect(page).to have_current_path(root_path), 'トップページが表示されていません'
        expect(page).to have_content('ログインしました'), 'フラッシュメッセージが表示されていません'
      end
    end

    context 'emailが未入力' do
      it 'ログイン処理が失敗' do
        visit new_user_session_path
        fill_in 'user_email', with: ''
        fill_in 'user_password', with: 'password'
        find(('input[name="commit"]')).click
        expect(page).to have_content('メールまたはパスワードが違います。')
      end
    end

    context 'パスワードが未入力' do
      it 'ログイン処理が失敗' do
        visit new_user_session_path
        fill_in 'user_email', with: user.email
        fill_in 'user_password', with: ''
        find(('input[name="commit"]')).click
        expect(page).to have_content('メールまたはパスワードが違います。')
      end
    end
  end

  describe 'ログアウト' do
    it 'ログアウト処理が成功' do
      login_by_fill(user)
      expect(page).to have_content('ログインしました。')
      expect(page).to have_css('#menu-icon svg')
      expect(page).to have_css('#m-drawer', visible: false)
      expect(page).not_to have_checked_field('m-drawer', visible: false)
      find('#menu-icon').click
      expect(page).to have_checked_field('m-drawer', visible: false)
      expect(page).to have_link('ログアウト'), 'ログアウトのリンクはありません'
      accept_confirm 'ログアウトしますか？' do
        click_link('ログアウト')
      end
      expect(current_path).to eq(root_path), 'トップページではありません'
      expect(page).to have_content('ログアウトしました。'), 'フラッシュメッセージが表示されていません'
    end
  end
end

