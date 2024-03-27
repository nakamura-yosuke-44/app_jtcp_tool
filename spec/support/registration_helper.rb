module RegistrationSupport
  def fill_user_info
    fill_in '名前', with: 'user1'
    fill_in 'メール', with: 'user1@example.com'
    fill_in 'user[password]', with: 'password'
    fill_in 'user[password_confirmation]', with: 'password'
    click_on '登録'
  end
end
