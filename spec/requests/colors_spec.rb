require 'rails_helper'

RSpec.describe "Colors", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/colors/index"
      expect(response).to have_http_status(:success)
    end
  end

end
