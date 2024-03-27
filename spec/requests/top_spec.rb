require 'rails_helper'

RSpec.describe "Tops" do
  describe "GET /index" do
    it "returns http success" do
      get "/top/index"
      expect(response).to have_http_status(:success)
    end
  end

end
