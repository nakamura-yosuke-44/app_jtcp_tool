require 'rails_helper'

RSpec.describe 'UserRegistration', type: :system, js: true do
  before do
    visit new_user_registration_path
  end
  describe '新規登録' do
    context '入力内容がすべて正常' do
      it 'ユーザー登録が成功する' do
        fill_in '名前', with: 'user1'
        fill_in 'メール', with: 'user1@example.com'
        fill_in 'user[password]', with: 'password'
        fill_in 'user[password_confirmation]', with: 'password'
        click_on '登録'
        expect(page).to have_content('アカウント登録が完了しました。')
        expect(current_path).to eq(root_path)
      end
    end

    context '名前が未入力で登録ボタンを押す' do
      it 'ユーザー登録が失敗' do
        fill_in '名前', with: ''
        fill_in 'メール', with: 'user1@example.com'
        fill_in 'user[password]', with: 'password'
        fill_in 'user[password_confirmation]', with: 'password'
        click_on '登録'
        expect(page).to have_content('名前を入力してください')
        expect(current_path).to eq(new_user_registration_path)
      end
    end

    context 'メールが未入力で登録ボタンを押す' do
      it 'ユーザー登録が失敗' do
        fill_in '名前', with: 'user1'
        fill_in 'メール', with: ''
        fill_in 'user[password]', with: 'password'
        fill_in 'user[password_confirmation]', with: 'password'
        click_on '登録'
        expect(page).to have_content('メールを入力してください')
        expect(current_path).to eq(new_user_registration_path)
      end
    end
    
    context 'パスワードが未入力で登録ボタンを押す' do
      it 'ユーザー登録が失敗' do
        fill_in '名前', with: 'user1'
        fill_in 'メール', with: 'user1@example.com'
        fill_in 'user[password]', with: ''
        fill_in 'user[password_confirmation]', with: 'password'
        click_on '登録'
        expect(page).to have_content('パスワードを入力してください')
        expect(current_path).to eq(new_user_registration_path)
      end
    end

    context '入力パスワードが６文字未満で登録ボタンを押す' do
      it 'ユーザー登録が失敗' do
        fill_in '名前', with: 'user1'
        fill_in 'メール', with: 'user1@example.com'
        fill_in 'user[password]', with: 'pass'
        fill_in 'user[password_confirmation]', with: 'pass'
        click_on '登録'
        expect(page).to have_content('パスワードは6文字以上で入力してください')
        expect(current_path).to eq(new_user_registration_path)
      end

      context 'パスワードとパスワード（確認用）が不一致で登録ボタンを押す' do
        it 'ユーザー登録が失敗' do
          fill_in '名前', with: 'user1'
          fill_in 'メール', with: 'user1@example.com'
          fill_in 'user[password]', with: 'paassword'
          fill_in 'user[password_confirmation]', with: ''
          click_on '登録'
          expect(page).to have_content('パスワード（確認用）とパスワードの入力が一致しません')
          expect(current_path).to eq(new_user_registration_path)
        end
      end
    end
  end
end