require 'rails_helper'

RSpec.describe 'UserRegistration', js: true do
  before do
    visit new_user_registration_path
  end
  describe '新規登録' do
    context '入力内容がすべて正常' do
      it '認証用のメールが送信される' do
        fill_user_info
        expect(page).to have_content('本人確認用のメールを送信しました。メール内のリンクからアカウントを有効化させてください。')
        expect(current_path).to eq(root_path)
      end

      it '本人確認用メールのリンクをクリックすると認証が完了する' do
        fill_user_info
        visit "http://localhost:3001/letter_opener"
        user = User.last
        token = user.confirmation_token
        visit user_confirmation_path(confirmation_token: token)
        expect(page).to have_text("メール認証完了。アカウントを作成しました。")
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
