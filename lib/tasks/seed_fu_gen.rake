namespace :seed_fu_gen do
  desc 'generate seed-fu file for colors'
  task colors: :environment do |t|
    SeedFu::Writer.write('./db/fixtures/test/colors.rb', class_name: 'Color', constraints: [:id]) do |w|
      Color.all.each do |x|
        w << x.as_json(except: [:created_at, :updated_at])
      end
    end
  end
end
