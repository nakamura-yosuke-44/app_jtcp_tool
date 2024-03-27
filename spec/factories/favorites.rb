# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  color_id   :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_favorites_on_color_id              (color_id)
#  index_favorites_on_user_id               (user_id)
#  index_favorites_on_user_id_and_color_id  (user_id,color_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (color_id => colors.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :favorite do
    association :user
    association :color, factory: :color_ai
  end
end
