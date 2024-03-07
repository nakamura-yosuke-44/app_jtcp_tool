# == Schema Information
#
# Table name: colors
#
#  id         :bigint           not null, primary key
#  code       :string           not null
#  kana       :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_colors_on_name_and_kana_and_code  (name,kana,code) UNIQUE
#
FactoryBot.define do
  factory :color_ai, class: 'Color' do
    name { "藍色" }
    kana { "あいいろ" }
    code { "#165e83" }
  end

  factory :color_sakura, class: 'Color' do
    name { "桜色" }
    kana { "さくらいろ" }
    code { "#fef4f4" }
  end

  factory :color_sora, class: 'Color' do
    name { "空色" }
    kana { "そらいろ" }
    code { "#a0d8ef" }
  end
end

