RSpec.configure do |config|
  config.before(:each, type: :system) do
    driven_by :selenium, using: :headless_chrome
    #driven_by :selenium_chrome
  end
  
  Capybara.asset_host = 'http://localhost:3001'
end
