class AddColumnToColors < ActiveRecord::Migration[7.1]
  def change
    add_column :colors, :kana, :string, null: false
  end
end
