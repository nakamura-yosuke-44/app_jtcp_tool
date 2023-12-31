class AddIndexToColors < ActiveRecord::Migration[7.1]
  def change
    add_index :colors, %i[name kana code], unique: true
  end
end
