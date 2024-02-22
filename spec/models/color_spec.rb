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
require 'rails_helper'

RSpec.describe Color, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
end
